import {Item} from './Item'; 

export const ItemList = ({incrementarContador, productos, titulo}) => {


    return (
        <>
        <h1 className='tiendaTitle'>{titulo}</h1>
        <div className="itemList">
        {productos.map((product) => (
            <Item product={product} key={product.id} incrementarContador={incrementarContador}/>
        ))}
        </div>
        </>
    );
};
