import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
const style = {

    box2: {
        marginLeft:"40px",
        marginTop: "-30px"
    },
    box2Paper1: {
        padding: "15px 0",
        width: 350,
        height: 100,
        color: "black",
        backgroundColor: "lightblue"

    },
    box2Paper2: {
        padding: "15px 0",
        width: 350,
        height: 100,
        color: "black",
        backgroundColor: "lightcoral"

    },
    box2Paper3: {
        padding: "15px 0",
        width: 350,
        height: 100,
        color: "black",
        backgroundColor: "lightblue"

    }

}
const BannerCard = () => {
    return (
        <Container sx={{ flexGrow: 1, mx: 2 }}>
            <Box style={style.box2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper style={style.box2Paper1} elevation={3}>
                            <Typography variant="p">
                                <span style={{ fontWeight: "bold", fontSize: "35px",color:"blue"}}><i class="far fa-clock"></i></span>
                                <span style={{ fontWeight: "bold" }}>  Showroom Opening & Closing time</span>
                            </Typography>
                            <br />
                            <Typography variant="small">
                                9am to 12.01 am
                            </Typography>
                        </Paper>


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper style={style.box2Paper2} elevation={3}>
                            <Typography variant="p">
                            <span style={{ fontWeight: "bold", fontSize: "35px",color:"white"}}><i class="fas fa-map-marker-alt"></i></span>
                                <span style={{ fontWeight: "bold" }}>  Visit Our location</span>
                            </Typography>
                            <br />
                            <Typography variant="small">
                                Sagorika Road, Chittagong, Bangladesh.
                            </Typography>
                        </Paper>

                    </Grid>
                    <Grid item xs={12} md={4}>

                        <Paper style={style.box2Paper3} elevation={3}>
                            <Typography variant="p">
                            <span style={{ fontWeight: "bold", fontSize: "35px",color:"purple"}}><i class="fas fa-phone-volume"></i></span>
                                <span style={{ fontWeight: "bold" }}>  Contact us now</span>
                            </Typography>
                            <br />
                            <Typography variant="small">
                                +800185516565
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>

            </Box>

        </Container>
    );
};

export default BannerCard;