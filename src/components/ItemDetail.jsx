import React from 'react'

export const ItemDetail = ({producto}) => {
    return (
        <div className='prodBody'>
            <div className='prodTitle'> {producto.name} </div>
            <img src={producto.imageUrl} alt="Imagen producto" className='prodImg'/>
            <img src={producto.imageAll} alt="Todos" className='prodImgAll'/>
            <p className='prodDescription'> {producto.description} </p>
        </div>
        )
}

