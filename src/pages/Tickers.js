import getHash from '../utils/getHash';
import getData from '../utils/getData';

const tickers =  async () => {

    const id = getHash();
    const data = await getData('?id='+id);
    const tickers= data[0]
    const view = `
        <div class="Characters-inner">
            <article class="Ticker-card">
                <h2>${tickers.name}</h2>
            </article>

            <article class="Characters-card">
                <h3>Symbol: <span>${tickers.symbol}</span></h3>
                <h3>Name:<span>${tickers.name}</span></ </h3>
                <h3>Nameid: <span>${tickers.nameid}</span></</h3>
                <h3>Rank: <span>${tickers.rank}</span></</h3>
                <h3>Price usd.: <span>${tickers.price_usd}</span></</h3>
                <h3>Percent change 24h: <span>${tickers.percent_change_24h}</span></</h3>
                <h3>Percent change 1h: <span>${tickers.percent_change_1h}</span></</h3>
                <h3>Percent change 7h: <span>${tickers.percent_change_7h}</span></</h3>
                <h3>Price btc: <span>${tickers.price_btc}</span></</h3>
                <h3>Market cap. usd.: <span>${tickers.market_cap_usd}</span></</h3>
                <h3>Volume24: <span>${tickers.volume24}</span></</h3>
                <h3>Volume24a: <span>${tickers.volume24a}</span></</h3>
                <h3>Csupply: <span>${tickers.csupply}</span></</h3>
                <h3>Tsupply: <span>${tickers.tsupply}</span></</h3>
                <h3>Msupply: <span>${tickers.msupply}</span></</h3>
                
            </article>
        </div> 
    `
    
    return view
};
export default tickers;