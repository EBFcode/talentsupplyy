import React from "react";
import Item from "./Item";

export default function itemList({ items }) {
    return (
        <div>
        {items.map((item) => (
            <Item key={item.id} item={item} />
        ))}
        </div>
    );
}
