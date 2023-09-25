import getData from '../utils/getData';

const Home = async () => {
    try {
        const tickers = await getData();

        // Verifica si tickers tiene la propiedad data antes de usarla
        if (tickers && tickers.data) {
            const view = `
                <div class="Tickers">
                    ${tickers.data.map(ticker => `
                        <article class="Character-item">
                            <a href="#/${ticker.id}/">
                                <h2 class="Character-name">${ticker.name}</h2>
                            </a>
                        </article>
                    `).join('')}
                </div>
            `;
            return view;
        } else {
            // Maneja el caso en el que tickers o tickers.data son undefined
            return 'No se encontraron datos de tickers.';
        }
    } catch (error) {
        // Maneja errores si ocurren al obtener los datos
        console.error('Error al obtener los datos:', error);
        return 'Error al obtener los datos.';
    }
}

export default Home;
