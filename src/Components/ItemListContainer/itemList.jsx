import { Box, Container } from "@mui/material";
import React from "react";
import Item from "./Item";


export default function itemList({ items }) {
    return (
        <Container maxWidth="xl">
            <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'Wrap'}}>
                {/* Limitar los items a 8 */}
                {items.map((item, index) => index < 8 && (
                    <Item key={item.id} item={item} />
                ))}
            </Box>
        </Container>
        
    );
}
