export type KunaV3Ticker = {
    symbol: string;
    bid: number;
    bidSize: number;
    ask: number;
    askSize: number;
    dailyChange: number;
    dailyChangePercent: number;
    lastPrice: number;
    volume: number;
    high: number;
    low: number;
}

export type KunaV3LastTrade = {

};


export type KunaV3Order = [number, number, number];

export type KunaV3OrderBook = {
    ask: KunaV3Order[];
    bid: KunaV3Order[];
};

export type KunaV3ExchangeRate = {
    currency: string;
    btc: number;
    uah: number;
    usd: number;
};


export type KunaV3Currency = {
    id: number;
    name: string;
    code: string;
    coin: boolean;
    explorer_link?: string;
    has_memo: boolean;
    icons: {
        xl?: string;
        std?: string;
        png_3x?: string;
        png_2x?: string;
    };

    precision: { real: number; trade: number; };
    sort_order: number;
};


export type KunaV3LandingPageStatistic = {
    day_usd_sum: number;
    traders: number;
    week_usd_sum: number;
};

export type KunaV3Market = {
    base_unit: string;
    quote_unit: string;
    base_precision: number;
    id: string;
    price_change: number;
    quote_precision: number;
};
