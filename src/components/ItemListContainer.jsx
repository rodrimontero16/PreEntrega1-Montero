import {ItemList} from './ItemList';

export const ItemListContainer = ({handleClickIncrementar}) => {
    return (
        <>
        <h1 className='tiendaTitle'>TIENDA</h1>
        <ItemList handleClickIncrementar = {handleClickIncrementar}/>
        </>
    );
};