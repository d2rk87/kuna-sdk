import { KunaAssetUnit } from './asset';

export type KunaMarket = {
    key: string;
    baseAsset: KunaAssetUnit;
    quoteAsset: KunaAssetUnit;
    /** @deprecated */
    format: string;
    decimal: number;

    compareTo?: string;
    disabled?: boolean;
};

export const kunaMarketMap: Record<string, KunaMarket> = {
    /**
     * to UAH
     */
    btcuah: {
        key: 'btcuah',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'btcusd',
    },

    btcusd: {
        key: 'btcusd',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.USDollar,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'btcusd',
    },

    btcrub: {
        key: 'btcrub',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.RussianRuble,
        format: '0,0.[00]',
        decimal: 2,
    },

    bnbusd: {
        key: 'bnbusd',
        baseAsset: KunaAssetUnit.BinanceCoin,
        quoteAsset: KunaAssetUnit.USDollar,
        format: '0,0.[00]',
        decimal: 2,
    },

    bnbuah: {
        key: 'bnbuah',
        baseAsset: KunaAssetUnit.BinanceCoin,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },

    bnbbtc: {
        key: 'bnbbtc',
        baseAsset: KunaAssetUnit.BinanceCoin,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[0000]',
        decimal: 4,
    },

    ethuah: {
        key: 'ethuah',
        baseAsset: KunaAssetUnit.Ethereum,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'ethusd',
    },
    dashuah: {
        key: 'dashuah',
        baseAsset: KunaAssetUnit.Dash,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'dshusd',
    },
    xrpuah: {
        key: 'xrpuah',
        baseAsset: KunaAssetUnit.Ripple,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'xrpusd',
    },
    ltcuah: {
        key: 'ltcuah',
        baseAsset: KunaAssetUnit.Litecoin,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'ltcusd',
    },
    eosuah: {
        key: 'eosuah',
        baseAsset: KunaAssetUnit.EOS,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'eosusd',
    },
    krbuah: {
        key: 'krbuah',
        baseAsset: KunaAssetUnit.Karbo,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    xemuah: {
        key: 'xemuah',
        baseAsset: KunaAssetUnit.Nem,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    remuah: {
        key: 'remuah',
        baseAsset: KunaAssetUnit.Remme,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    goluah: {
        key: 'goluah',
        baseAsset: KunaAssetUnit.Golos,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    wavesuah: {
        key: 'wavesuah',
        baseAsset: KunaAssetUnit.Waves,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    zecuah: {
        key: 'zecuah',
        baseAsset: KunaAssetUnit.ZCash,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    bchuah: {
        key: 'bchuah',
        baseAsset: KunaAssetUnit.BitcoinCash,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    xlmuah: {
        key: 'xlmuah',
        baseAsset: KunaAssetUnit.Stellar,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[0000]',
        decimal: 4,
    },
    usdtuah: {
        key: 'usdtuah',
        baseAsset: KunaAssetUnit.Tether,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    usduah: {
        key: 'usduah',
        baseAsset: KunaAssetUnit.USDollar,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    tusduah: {
        key: 'tusduah',
        baseAsset: KunaAssetUnit.TrueUSD,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[00]',
        decimal: 2,
    },
    eursuah: {
        key: 'eursuah',
        baseAsset: KunaAssetUnit.StasisEuro,
        quoteAsset: KunaAssetUnit.UkrainianHryvnia,
        format: '0,0.[0000]',
        decimal: 4,
    },

    /**
     * to Tether
     */
    btcusdt: {
        key: 'btcusdt',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.Tether,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'btcusd',
    },
    ethusdt: {
        key: 'ethusdt',
        baseAsset: KunaAssetUnit.Ethereum,
        quoteAsset: KunaAssetUnit.Tether,
        format: '0,0.[00]',
        decimal: 2,
        compareTo: 'ethusd',
    },


    /**
     * to Bitcoin
     */
    ethbtc: {
        key: 'ethbtc',
        baseAsset: KunaAssetUnit.Ethereum,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[0000]',
        decimal: 4,
    },
    eosbtc: {
        key: 'eosbtc',
        baseAsset: KunaAssetUnit.EOS,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    kunbtc: {
        key: 'kunbtc',
        baseAsset: KunaAssetUnit.KunaToken,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    bchbtc: {
        key: 'bchbtc',
        baseAsset: KunaAssetUnit.BitcoinCash,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    hknbtc: {
        key: 'hknbtc',
        baseAsset: KunaAssetUnit.Hacken,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },
    arnbtc: {
        key: 'arnbtc',
        baseAsset: KunaAssetUnit.Aeron,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[000000]',
        decimal: 6,
    },


    ethusd: {
        key: 'ethusd',
        baseAsset: KunaAssetUnit.Ethereum,
        quoteAsset: KunaAssetUnit.USDollar,
        format: '0,0.[00]',
        decimal: 2,
    },


    /**
     * to Stasis Euro
     */
    btceurs: {
        key: 'btceurs',
        baseAsset: KunaAssetUnit.Bitcoin,
        quoteAsset: KunaAssetUnit.StasisEuro,
        format: '0,0.[000000]',
        decimal: 6,
    },


    /**
     * to Golos
     */
    golbtc: {
        key: 'golbtc',
        baseAsset: KunaAssetUnit.Golos,
        quoteAsset: KunaAssetUnit.Bitcoin,
        format: '0,0.[00000000]',
        decimal: 8,
    },

    /**
     * to Golos Gold
     */
    gbgusdt: {
        key: 'gbgusdt',
        baseAsset: KunaAssetUnit.GolosGold,
        quoteAsset: KunaAssetUnit.Tether,
        format: '0,0.[000000]',
        decimal: 6,
    },


    /**
     * to Ethereum
     */
    remeth: {
        key: 'remeth',
        baseAsset: KunaAssetUnit.Remme,
        quoteAsset: KunaAssetUnit.Ethereum,
        format: '0,0.[00000000]',
        decimal: 8,
    },

    /**
     * RUB
     */

    usdtrub: {
        key: 'usdtrub',
        baseAsset: KunaAssetUnit.Tether,
        quoteAsset: KunaAssetUnit.RussianRuble,
        format: '0,0.[00]',
        decimal: 2,
    },

};
