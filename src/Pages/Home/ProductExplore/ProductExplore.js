import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';


const ProductExplore = ({ exploreProduct,exploreProducts,setExploreProducts }) => {
    const { user } = useAuth()
    const { _id, img, price, car_name, description } = exploreProduct;
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch('https://still-taiga-17491.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, []);
    const handleDelete = id => {
        const url = `https://still-taiga-17491.herokuapp.com/explore/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure to delete?');

                    const remainingProduct = exploreProducts.filter(product => product._id !== id);
                    setExploreProducts(remainingProduct);

                }

            })
    }
    return (
        <Container>

            <Paper sx={{ flexGrow: 1 }}>
                <Grid sx={{ mb: 5 }} container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img src={img} alt="" />

                    </Grid>
                    <Grid sx={{ pr: 5, pb: 2 }} item xs={12} md={7}>
                        <Typography variant="h6">
                            {car_name}
                        </Typography>
                        <Typography variant="h6">
                            Price: {price}
                        </Typography>
                        <Typography variant="small">
                            {description}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                {
                                    admins.map(admin => <Box>
                                        {
                                            user.email === admin.email &&
                                            <Button onClick={() => handleDelete(exploreProduct._id)} style={{ color: "white", backgroundColor: "lightcoral" }}>Delete</Button>

                                        }

                                    </Box>)
                                }
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <NavLink to={`/placeOrder2/${_id}`}>
                                    <Button sx={{ width: "300px" }} variant="contained">Buy Now</Button>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        </Container>
    );
};

export default ProductExplore;