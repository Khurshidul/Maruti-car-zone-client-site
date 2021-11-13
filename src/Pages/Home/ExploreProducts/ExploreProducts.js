import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ProductExplore from '../ProductExplore/ProductExplore';

const ExploreProducts = () => {
    const [exploreProducts, setExploreProducts] = useState([]);
    useEffect(() => {
        fetch('https://still-taiga-17491.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setExploreProducts(data));
    }, [])
    return (
        <Box>
            <Navigation />


            <Container>
                <Typography style={{ color: "lightblue" }} variant="h3">
                    Maruti Suzuki Baleno

                </Typography>
                <Box sx={{ mt: 5 }}>
                    {
                        exploreProducts.map(exploreProduct => <ProductExplore
                            key={exploreProduct.id}
                            exploreProduct={exploreProduct}
                            exploreProducts={exploreProducts}
                            setExploreProducts= {setExploreProducts}
                        ></ProductExplore>)
                    }
                </Box>
                <Footer />
            </Container>
        </Box>
    );
};

export default ExploreProducts;