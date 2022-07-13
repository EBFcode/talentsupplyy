import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    let {idItem} = useParams();

        useEffect(() => {

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
                    title: 'apple',
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
            .then(response => {
                const arrayFiltered = response.find((item) => item.id === Number(idItem));
                setItem(arrayFiltered)
            })
            .catch(err => console.log(err));
        }, [idItem])
        
    return (
        <>
        <ItemDetail item={item}/>
        </>           
    )
}
