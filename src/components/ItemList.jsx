import {Item} from './Item'; 
import {products} from './database';

export const ItemList = ({incrementarContador, filtro}) => {

    const productosFiltrados = filtro ? products.filter((product) => product.type === filtro) : products;

    return (
        <div className="itemList">
        {productosFiltrados.map((product) => (
            <Item
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            stock={product.stock}
            type={product.type}
            incrementarContador={incrementarContador}
            />
        ))}
        </div>
    );
};
