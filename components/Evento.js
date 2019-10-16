
const Evento = (props) => {
    const {name, url, description} =props.info;

    let des = description.text;
    let titulo = name.text;
    if(des){
        des=des.substr(0,250) + '...';
    }
    if(titulo.length > 100){
        titulo=titulo.substr(0,150) + '...';
    }
    return (
        <a href={url} target="_black" className="list-group-item active text-light mb-1">
            <h3 className="mb-3" >{titulo}</h3>
            <p className="mb-1">{des}</p>
        </a>
    );
};

export default Evento;