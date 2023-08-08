import {ItemList} from './ItemList';

export const ItemListContainer = ({incrementarContador, filtro}) => { 
    let title = 'TIENDA'
    
    if (filtro){
        title = `${filtro.toUpperCase()}`;
    }

    return (
        <>
        <h1 className='tiendaTitle'>{title}</h1>
        <ItemList filtro= {filtro} incrementarContador = {incrementarContador}/>
        </>
    );
};