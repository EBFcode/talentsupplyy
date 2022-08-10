import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Item from "./Item";


export default function itemList({ items }) {
    return (

        <>
            <Container maxWidth="xl">
                <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'Wrap'}}>
                    {/* Limitar los items a 8, y evitamos presentar la categoria televisores */}
                    {items.map((item, index) => index < 8 && item.categoria !== "televisores" &&  (
                        <Item key={item.id} item={item} />
                    ))}
                </Box>
            </Container>
        </>
    );
}
