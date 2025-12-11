import type {QuoteData} from "./datafeed-api";
import type {UdfOkResponse} from "./helpers";

export interface UdfQuotesResponse extends UdfOkResponse {
  d: QuoteData[];
}

export interface IQuotesProvider {
  getQuotes(symbols: string[]): Promise<QuoteData[]>;
}
