use futures::StreamExt;
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

  // spawn listener
  tokio::spawn(async move {
    let runtime = client.runtime();
    // Create our subscription and filter only the events we needs
    let mut all_events_to_subscribe = runtime
      .events()
      .subscribe()
      .await
      .unwrap()
      .filter_events::<(
        tidechain::security::events::UpdateCurrentBlock,
        tidechain::tidefi::events::Swap,
        tidechain::oracle::events::SwapProcessed,
        tidechain::tidefi::events::Transfer,
      )>();

    // Our subscription will see all of the events we're filtering on:
    while let Some(ev) = all_events_to_subscribe.next().await {
      let event_details = ev.unwrap();

      let block_hash = event_details.block_hash;
      let event = event_details.event;
      debug!("Event at {:?}:", block_hash);

      if let (Some(update_current_block), _, _, _) = &event {
        debug!("update block event: {:?}", update_current_block);
      }

      if let (_, Some(swap), _, _) = &event {
        debug!("swap event: {:?}", swap);
      }

      if let (_, _, Some(swap_processed), _) = &event {
        debug!("swap processed event: {:?}", swap_processed);
      }

      if let (_, _, _, Some(transfer)) = &event {
        debug!("transfer event: {:?}", transfer);
      }
    }
  });

  std::thread::sleep(std::time::Duration::from_secs(600));

  Ok(())
}
