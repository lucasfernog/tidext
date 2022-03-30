// Copyright 2021-2022 Semantic Network Ltd.
// This file is part of tidext.

// tidext is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Tidechain is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with tidext.  If not, see <http://www.gnu.org/licenses/>.

// Checks that code generated by `subxt-cli codegen` compiles. Allows inspection of compiler errors
/// directly, more accurately than via the macro and `cargo expand`.
///
/// Generate by:
///
/// - run `tidechain --dev --tmp` node locally
/// - cargo install --git https://github.com/tide-labs/substrate --branch=tidechain --force
/// - `subxt codegen | rustfmt --edition=2021 --emit=stdout > tidext/tests/integration/codegen/tidechain.rs`

#[rustfmt::skip]
#[allow(clippy::all)]
mod tidechain;
