import { Box } from "@mui/material";
import React from "react";
import Item from "./Item";


export default function itemList({ items }) {
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'Wrap'}}>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </Box>
    );
}
