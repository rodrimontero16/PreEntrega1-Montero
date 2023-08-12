import { Link } from "react-router-dom"

export const Item = ({product, incrementarContador}) =>{

    return (
    
    <div className="card m-3 Link" style={{ width: '20rem' }} key={product.id}>
        <Link className="Link"  to={`/${product.category}/${product.id}`}>
            <img src={product.imageUrl} className="card-img-top p-3" alt={product.category}/>
        </Link>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="price">USD {product.price}</p>
            <button className="btn btn-outline-success" onClick={incrementarContador}>Añadir</button>
        </div>
    </div>
    
);
};  