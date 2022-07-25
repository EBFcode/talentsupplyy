import React from 'react'
import './ItemListContainer.css'
import ItemList from './itemList'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export default function ItemListContainer() {
    const [loading, setLoading] = React.useState(true)
    const [items, setItems] = React.useState([])
    let {idCategory} = useParams();

    React.useEffect(() => {

        let url = 'https://imcod3r.github.io/CatStoreApi/api.json'

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!idCategory) {
                setItems(data);
            } else {
            const arrayFiltrado = data.filter((item) => item.categoria === idCategory);
            setItems(arrayFiltrado)
            }
        })
        .catch(error => console.warn(error))
        .finally(() => setLoading(false))

    }, [idCategory])

    return (
        <>
        {loading && 'loading..'}
        {items && <ItemList items={items} /> } 
        </>
    )
}