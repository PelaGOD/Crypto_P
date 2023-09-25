const API = 'https://api.coinlore.net/api/tickers/';

const getData = async (id) => {
    const APIs = 'https://api.coinlore.net/api/ticker/';
    const apiURL = id ? `${APIs}${id}` : API;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData;