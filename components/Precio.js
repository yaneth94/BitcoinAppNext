
const Precio = (props) => {
    const {price, percent_change_1h,percent_change_24h,percent_change_7d} = props.precio;
    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header">Bitcoin Price</div> 
            <div className="card-body">
                <h4 className="card-title">Actual Price: ${price.toFixed(2)}</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">
                            Last minute:  
                        </span>
                        {percent_change_1h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">
                            Last 24 hours:  
                        </span>
                        {percent_change_24h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">
                            Last 7 days:  
                        </span>
                        {percent_change_7d} %
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Precio;