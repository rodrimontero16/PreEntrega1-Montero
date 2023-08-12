import { Link } from "react-router-dom"

export const Item = ({id, name, imageUrl, price, incrementarContador}) =>{

    return (
    
    <div className="card m-3 Link" style={{ width: '20rem' }} key={id}>
        <Link className="Link"  to={`/categoria/${id}`}>
            <img src={imageUrl} className="card-img-top p-3" alt={name}/>
        </Link>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="price">USD {price}</p>
            <button className="btn btn-outline-success" onClick={incrementarContador}>Añadir</button>
        </div>
    </div>
    
);
};  