import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Bitcoin price</h2>
                <Precio
                    precio={props.preciobitcoin}
                >
                </Precio>
            </div>
            <div className="col-md-8">
                <h2 className="my-3">News about Bitcoin</h2>
                <Noticias
                 noticias={props.noticias}
                ></Noticias>
            </div>
            <div className="col-md-4">
                <h2 className="my-3">Upcoming Bitcoin events</h2>
                <Eventos
                    eventos={props.eventos}
                >
                </Eventos>
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const urlBitcoin ='https://api.coinmarketcap.com/v2/ticker/1/';
    const urlNews ='https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-16&sortBy=publishedAt&apiKey=a23c2e71e78b46f99e2a5a3e0fb2a408&language=es';
    let urlEvent=`https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&token=5UBBY4YG325NG5N6H26R&locale=es_ES`;
    const precio  = await fetch(urlBitcoin);
    const noticias = await fetch(urlNews);
    const eventos = await fetch(urlEvent);

    const resPrecio = await precio.json();
    const resNews = await noticias.json();
    const resEventos = await eventos.json();
    return {
        preciobitcoin: resPrecio.data.quotes.USD,
        noticias : resNews.articles,
        eventos: resEventos.events
    }
}
export default Index;