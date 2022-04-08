/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export type CurrencyId = number | undefined | null

export type BalanceInfo = string

export interface NodeHealth {
  /** Number of connected peers */
  peers: number
  /** Is the node syncing */
  isSyncing: boolean
  /**
   * Should this node have any peers
   *
   * Might be false for local chains or when running without discovery.
   */
  shouldHavePeers: boolean
}
export interface CurrencyBalance {
  available: BalanceInfo
  reserved: BalanceInfo
}
export interface CurrencyMetadata {
  /** Currency name. */
  name: string
  /** Currency symbol. */
  symbol: string
  /** Number of decimals for the currency. */
  decimals: number
  /** Currency is frozen on chain (can't transfer). */
  isFrozen: boolean
}
export const enum SwapType {
  Market = 0,
  Limit = 1
}
export interface Currency {
  tokenId: CurrencyId
  metadata: CurrencyMetadata
}
export class Builder {
  /** Initializes the Builder. */
  constructor(url: string, snapshotPath: string, password: string)
  build(): Promise<Client>
}
export class Client {
  systemHealth(): Promise<NodeHealth>
  getAccountId(): Promise<Buffer>
  getAccountIdSs58(): Promise<string>
  getRegularSwapFee(): Promise<number>
  getMarketMakerSwapFee(): Promise<number>
  extrinsicCost(extrinsic: string): Promise<BalanceInfo>
  submitSignedExtrinsic(extrinsic: string): Promise<void>
  unstakeExtrinsic(stakeId: Buffer, forceUnstake: boolean): Promise<string>
  stakeExtrinsic(tokenId: CurrencyId, amount: BalanceInfo, duration: number): Promise<string>
  swapExtrinsic(fromTokenId: CurrencyId, toTokenId: CurrencyId, fromAmount: BalanceInfo, toAmount: BalanceInfo, swapType: SwapType, slippageTolerance: number): Promise<string>
  transferExtrinsic(tokenId: CurrencyId, amount: BalanceInfo, destination: Buffer): Promise<string>
  balance(tokenId: CurrencyId, accountId?: Buffer | undefined | null): Promise<CurrencyBalance>
  totalStakeFor(currencyId: CurrencyId): Promise<BalanceInfo>
  totalSupplyFor(currencyId: CurrencyId): Promise<BalanceInfo>
  allAssets(): Promise<Array<Currency>>
  withdrawal(assetId: CurrencyId, amount: BalanceInfo, externalAddress: Buffer): Promise<void>
  withdrawalExtrinsic(assetId: CurrencyId, amount: BalanceInfo, externalAddress: Buffer): Promise<string>
}