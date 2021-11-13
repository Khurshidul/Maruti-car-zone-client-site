import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const style = {
    backgroundColor: 'lightgray',
    height: "350px",
    Width: "100%",
    margin: "20px"
}
const Product = ({ product }) => {
    const { _id, price, img, car_name, description } = product;


    return (
        <Container>
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
                           Price: {price}
                        </Typography>
                        <Typography variant="small">
                            {description}
                        </Typography>
                            <br />

                            <NavLink to={`/placeOrder/${_id}`}>
                                <Button sx={{ width: "400px" }} variant="contained">Buy Now</Button>
                            </NavLink>
                        </Paper>

                    </Grid>
                </Grid>
            </Box>

        </Container>
    );
};

export default Product;