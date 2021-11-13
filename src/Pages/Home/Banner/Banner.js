import React from 'react';
import Grid from '@mui/material/Grid';
import banner_car from '../../../images/car_banner.jfif';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';



const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid sx={{mt:5}} style={{backgroundColor: 'lightblue'}} container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                           Enjoy your Car From Here.
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            We have so many kinds of car in different brand.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Buy</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '450px' }} src={banner_car} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;