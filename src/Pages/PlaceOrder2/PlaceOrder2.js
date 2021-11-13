import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';


const style = {
    backgroundColor: 'lightgray',
    height: "350px",
    Width: "100%",
    margin: "20px"
}

const PlaceOrder2 = () => {
    const { user } = useAuth();
    const { exploreProductsId } = useParams();
    const [exploreProduct, setExploreProduct] = useState({});
    const [totalUsers, setTotalUsers] = useState([]);
    const { price, img, car_name, description } = exploreProduct;


    useEffect(() => {
        fetch('https://still-taiga-17491.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setTotalUsers(data));
    }, []);
    useEffect(() => {
        fetch(`https://still-taiga-17491.herokuapp.com/explore/${exploreProductsId}`)
            .then(res => res.json())
            .then(data => setExploreProduct(data));
    }, [exploreProductsId]);

    return (
        <Box>
            <Navigation />
            <Container>
                <Box>
                    {
                        totalUsers.map(currentUser => <Paper sx={{ my: 5, ml: 50, width: "30%" }} elevation={3}> {
                            user.email === currentUser.email &&
                            <Box>
                                <Typography variant="h6">
                                    {currentUser.displayName}

                                </Typography>
                                <Typography variant="h6">
                                    {currentUser.email}

                                </Typography>

                            </Box>
                        }</Paper>)
                    }
                </Box>
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img src={img} alt="" />
                        </Grid>
                        <Grid sx={{ pr: 5, pb: 2 }} item xs={12} md={6}>
                            <Paper elevation={3}>
                                <Typography variant="h6">
                                    {car_name}
                                </Typography>
                                <Typography variant="h6">
                                    {price}
                                </Typography>
                                <Typography variant="small">
                                    {description}
                                </Typography>


                                <br />

                                <NavLink to='/orderConfirm'>
                                    <Button sx={{ width: "400px" }} variant="contained">Confirm Order</Button>
                                </NavLink>
                            </Paper>

                        </Grid>
                    </Grid>
                </Box>
                        
            </Container>
            <Footer />
        </Box>
    );
};

export default PlaceOrder2;