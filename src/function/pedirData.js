import data from "../data/data.json"

export const pedirData = () => {
    return new Promise ((resolve, reject) => {
        resolve(data)
    });
}

export const pedirProducto = (id) =>{
    return new Promise ((resolve, reject) => {
        const producto = data.find((prod) => prod.id === id);
        setTimeout(() => {
            if (producto) {
                resolve(producto)
            } else {
                reject({
                    error: 'No se encontro el producto'
                })
            }
        }, 500);

    })
}