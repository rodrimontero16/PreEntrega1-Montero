import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../context/cartContext";


export const Item = ({product}) =>{
    //Contextos
    const {agregarAlCarrito} = useContext(CartContext);
    
    //Funcion para usar mas de una funcion en el button
    const handleButtonClick = () => {
        agregarAlCarrito(product);
    };


    
    return (
    
    <div className="card m-3 Link cardProduct" style={{ width: '20rem' }} key={product.id}>
        <Link className="Link"  to={`/tienda/${product.category}/${product.id}`}>
            <img src={product.imageUrl} className="card-img-top p-3" alt={product.category}/>
        </Link>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="price">USD {product.price}</p>
            <button className="btn btn-outline-success" onClick={handleButtonClick} id={`${product.id}`}>Añadir</button>
        </div>
    </div>
    
);
};  