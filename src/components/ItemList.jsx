import {Item} from './Item'; 

export const ItemList = ({incrementarContador, productos}) => {


    return (
        <>
        <h1 className='tiendaTitle'>Tienda</h1>
        <div className="itemList">
        {productos.map((product) => (
            <Item
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            stock={product.stock}
            category={product.category}
            incrementarContador={incrementarContador}
            />
        ))}
        </div>
        </>
    );
};
