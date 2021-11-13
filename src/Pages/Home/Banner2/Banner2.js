import React from 'react';
import Grid from '@mui/material/Grid';
import banner2 from '../../../images/banner-bg.jfif';
import bannerImg from '../../../images/bannerImg.jfif';

import { Button, Container, Paper, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
const style = {
    paperPoster: {
        backgroundImage: `url(${banner2})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"

    },
    paper2: {
        backgroundColor: "lightcoral",
        height: "450px",

    },
    bannerImg: {
        pt: 2,
        width: 600,
        height: 400,
    },
    bannerDetails: {
        marginTop: "50px",

    },
    bannerDetailsP: {
        marginTop: "50px",
        color: "white"

    },
    button: {
        marginTop: "50px",
        color: "white",
        backgroundColor: "blue",
        textDecoration: "none",
        height: "30px"

    }
    

}
const Banner2 = () => {
    return (
        <Container style={style.paperPoster} sx={{ flexGrow: 1, height: "500px", mt: 5 }}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Typography style={style.bannerDetails} variant="h4">
                            <span style={{ color: "white" }}> MARUTI</span>
                            <span style={{ color: "lightsalmon" }}> SUZUKI </span>
                            <span style={{ color: "lightsalmon" }}>BALENO</span>
                        </Typography>
                        <Typography style={style.bannerDetailsP} variant="p">
                            This PNG image was uploaded on June 15, 2017, 2:08 pm by user: <br /> haseebr7 and is about Alto, Automotive Design, <br />  Automotive Exterior, Brand, Bumper.<br />  It has a resolution of 800x480 pixels.
                        </Typography>
                        <br />
                        <NavLink to='/explore'>
                            <Button style={style.button} sx={{ width: "300px" }} variant="contained">See More</Button>
                        </NavLink>

                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Paper style={style.paper2}>
                            <img style={style.bannerImg} src={bannerImg} alt="" />
                        </Paper>

                    </Grid>

                </Grid>

            </Box>
            <br />
            
           
            
        </Container>
    );
};

export default Banner2;