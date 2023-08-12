import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { pedirProducto } from '../function/pedirData'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState (null)
    const [error, setError] = useState(null)
    const {id} = useParams();
    const category =useParams().category;


    useEffect (() =>{
        pedirProducto(Number(id)).then((res) =>{
            setProducto(res);
        }).catch((err) => {
            setError(err)
        })
    }, [id])

    return (
    <>
        {error ?  (<h1>No se encontro el producto</h1>) : producto && <ItemDetail producto={producto}/> }
    </>
    )
}

