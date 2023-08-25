import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = () => {    

    const { carrito, incrementarCantidad, decrementarCantidad, totalCompra, cartTitle, eliminarProducto} = useContext(CartContext);
    return (
        <div className="cart">
            <h1 className="cartTitle">{cartTitle}</h1>
            {
                carrito.map((prod) => (
                    <div className="cartContainer" key={prod.id}>
                        <Button variant="outlined" className="deleteIcon" startIcon={<DeleteIcon />} onClick={() => {eliminarProducto(prod)}}>Eliminar</Button>
                        <h3 className="prodNameCart">{prod.name}</h3>
                        <img src={prod.imageUrl} alt="Imagen producto" className="prodImgCart" />
                        <p className="prodPrecioCart">USD {prod.price * prod.cantidad}</p>
                        <div className="cantidadContainer">
                            <button type="button" className="btn btn-outline-primary decrementar" onClick={ () => {decrementarCantidad(prod.id)}}> - </button>
                            <span className="cantidadProd">{prod.cantidad}</span>
                            <button type="button" className="btn btn-outline-primary incrementar" onClick={ () => {incrementarCantidad(prod.id)}}> + </button>
                        </div>
                    </div>
                ))
            }
            <div className="totalCompra">{totalCompra()}</div>

            
        </div>
    )
}