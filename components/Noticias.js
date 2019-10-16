import Noticia from "./Noticia";

const Noticias = (props) => {
    return (
        <div className="row">
            {props.noticias.map(noticia => (
                <Noticia
                key={noticia.url}
                noticia={noticia}
                ></Noticia>
            ))}
        </div>
    );
};

export default Noticias;