// Copyright 2021-2022 Semantic Network Ltd.
// This file is part of tidext.

// tidext is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// tidext is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with tidext.  If not, see <http://www.gnu.org/licenses/>.

use napi::bindgen_prelude::ToNapiValue;
use tidefi_primitives::{
  CurrencyId as PrimitiveCurrencyId, CurrencyMetadata as PrimitiveCurrencyMetadata,
  SwapType as PrimitiveSwapType,
};
use tidext::NodeHealth as PrimitiveNodeHealth;

#[napi(object)]
pub struct NodeHealth {
  /// Number of connected peers
  pub peers: u32,
  /// Is the node syncing
  pub is_syncing: bool,
  /// Should this node have any peers
  ///
  /// Might be false for local chains or when running without discovery.
  pub should_have_peers: bool,
}

impl From<PrimitiveNodeHealth> for NodeHealth {
  fn from(node_health: PrimitiveNodeHealth) -> Self {
    Self {
      peers: node_health.peers as u32,
      is_syncing: node_health.is_syncing,
      should_have_peers: node_health.should_have_peers,
    }
  }
}

pub type CurrencyId = Option<u32>; // None means Tifi

pub fn currency_id_from(id: PrimitiveCurrencyId) -> CurrencyId {
  match id {
    PrimitiveCurrencyId::Tifi => None,
    PrimitiveCurrencyId::Wrapped(id) => Some(id),
  }
}

pub fn currency_id_into(id: CurrencyId) -> PrimitiveCurrencyId {
  match id {
    None => PrimitiveCurrencyId::Tifi,
    Some(id) => PrimitiveCurrencyId::Wrapped(id),
  }
}

pub type BalanceInfo = String;

pub fn balance_info_from(value: u128) -> BalanceInfo {
  value.to_string()
}

pub fn balance_info_into(b: BalanceInfo) -> u128 {
  b.parse().unwrap()
}

#[napi(object)]
pub struct CurrencyBalance {
  pub available: BalanceInfo,
  pub reserved: BalanceInfo,
}

#[napi(object)]
pub struct CurrencyMetadata {
  /// Currency name.
  pub name: String,
  /// Currency symbol.
  pub symbol: String,
  /// Number of decimals for the currency.
  pub decimals: u32,
  /// Currency is frozen on chain (can't transfer).
  pub is_frozen: bool,
}

impl From<PrimitiveCurrencyMetadata<Vec<u8>>> for CurrencyMetadata {
  fn from(metadata: PrimitiveCurrencyMetadata<Vec<u8>>) -> Self {
    Self {
      name: String::from_utf8_lossy(&metadata.name).into_owned(),
      symbol: String::from_utf8_lossy(&metadata.symbol).into_owned(),
      decimals: metadata.decimals.into(),
      is_frozen: metadata.is_frozen,
    }
  }
}

#[derive(Debug, Eq, PartialEq)]
#[napi]
pub enum SwapType {
  Market,
  Limit,
}

impl From<PrimitiveSwapType> for SwapType {
  fn from(swap_type: PrimitiveSwapType) -> Self {
    match swap_type {
      PrimitiveSwapType::Market => Self::Market,
      PrimitiveSwapType::Limit => Self::Limit,
    }
  }
}

impl From<SwapType> for PrimitiveSwapType {
  fn from(swap_type: SwapType) -> Self {
    match swap_type {
      SwapType::Limit => Self::Limit,
      SwapType::Market => Self::Market,
    }
  }
}
