import { Container, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';



const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://still-taiga-17491.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <Container className="products-container">
            <Typography variant="h3" style={{color:"tomato"}}>
        
                <u>Our Products</u>

          </Typography>
            <Divider/>
            <Divider/>
            <Divider/>
            <Divider/>
            <Divider/>
            <Divider/>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }

        </Container>
    );
};

export default Products;

