import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    let { idItem } = useParams();

    useEffect(() => {
        let url = "https://imcod3r.github.io/CatStoreApi/api.json";

        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const arrayFiltrado = data.find((item) => item.id === Number(idItem));
            setItem(arrayFiltrado)
        })
        .catch((error) => console.warn(error));
    }, [idItem]);
    return (
        <>
        <ItemDetail item={item} />
        </>
    );
}
