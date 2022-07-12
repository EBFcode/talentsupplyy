import React from 'react'
import './ItemListContainer.css'
import ItemList from './itemList'


export default function ItemListContainer() {
    const [loading, setLoading] = React.useState(true)

    const [items, setItems] = React.useState([])

    React.useEffect(() => {

        const prod = [
            {
                id: 1,
                title: 'samsung',
                price: 1000,
                pictureUrl: "https://images.samsung.com/is/image/samsung/assets/latin/2202/pcd/smp/PCD_B_KV_Merchandising_264x264_mo.png?$264_264_PNG$",
                stock: 5
            },
            {
                id: 2,
                title: 'Apple',
                price: 2500,
                pictureUrl: "https://www.att.com/idpassets/global/devices/phones/apple/apple-iphone-12/carousel/blue/64gb/6861C-1_carousel.png",
                stock: 7

            }
        ]

        let task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(prod)
            }, 2000)
        })

        task
        .then(response => setItems(response))
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
        {items && <ItemList items={items} /> } 
        </>
    )
}
