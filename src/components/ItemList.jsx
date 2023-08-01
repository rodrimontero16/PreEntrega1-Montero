import {Item} from './Item'; 
import {products} from './database';

export const ItemList = () => {

    return (
        <div className="itemList">
        {products.map((product) => (
            <Item
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            stock={product.stock}
            />
        ))}
        </div>
    );
};
