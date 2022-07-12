import React from 'react'
// import ItemCount from '../ItemCount.jsx'
import './ItemListContainer.css'


export default function ItemListContainer() {
    const [loading, setLoading] = React.useState(true)

    const [items, setItems] = React.useState([])

    React.useEffect(() => {

        const prod = [
            {
                id: 1,
                name: 'samsung'
            },
            {
                id: 2,
                name: 'apple'
            }
        ]

        let task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(prod)
            }, 2000)
        })

        task
        .then(response => console.log(response))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));

    }, [])

    // // Variable para administrar Stock
    // let maxStock = 100;
    // let initial = 1;

    // function onAdd(numero){
    //     alert("Items agregados al carrito: " + numero)
    // }


    return (
        <>
        {loading && 'loading..'}
        {items && <div>  </div>/}
        </>
    )
}
