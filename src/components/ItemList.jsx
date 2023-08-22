import {Item} from './Item'; 

export const ItemList = ({productos, titulo}) => {


    return (
        <>
        <p className='tiendaTitle'>{titulo}</p>
        <div className="itemList">
        {productos.map((product) => (
            <Item product={product} key={product.id} />
        ))}
        </div>
        </>
    );
};
