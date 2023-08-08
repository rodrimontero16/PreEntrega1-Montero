export const Item = ({id, name, imageUrl, price, stock, incrementarContador}) =>{

    return (
    <div className="card m-3" style={{ width: '20rem' }} key={id}>
        <img src={imageUrl} className="card-img-top p-3" alt={name}/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="price">USD {price}</p>
            <button className="btn btn-outline-success" onClick={incrementarContador}>Añadir</button>
        </div>
    </div>
);
};