use futures::{future, stream, StreamExt};
use tidext::{tidechain, ClientBuilder, TidefiKeyring};

// load sr25519 test account
use sp_keyring::AccountKeyring;

#[path = "../src/lib.rs"]
mod helpers;

// logging
#[macro_use]
extern crate log;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  // init logger
  helpers::init_logger()?;
  // init signer
  let signer = TidefiKeyring::try_from_seed(AccountKeyring::Alice.to_seed(), None)
    .await?
    .pair_signer();
  // init client
  let client = ClientBuilder::new()
    .set_signer(signer)
    //.set_url("ws://127.0.0.1:9944")
    .build()
    .await?;

  let runtime = client.runtime();
  let mut event_sub = runtime
    .events()
    .subscribe()
    .await?
    // Filter extrinsic success
    .filter_map(|events| future::ready(events.ok()))
    // Map events to just the one we care about:
    .flat_map(|events| {
      let update_block = events
        .find::<tidechain::security::events::UpdateCurrentBlock>()
        .collect::<Vec<_>>();
      stream::iter(update_block)
    });

  while let Some(update_block_event) = event_sub.next().await {
    debug!("Update block event: {:?}", update_block_event);
  }

  Ok(())
}
