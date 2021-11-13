import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import reviewPoster from '../../../images/review.jfif';
import reviewPoster2 from '../../../images/review1.jfif';
const ReviewMessage = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        fetch('https://still-taiga-17491.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => setMessages(data));

    }, [])
    return (
        <Container>
            <Typography style={{ color: "lightcoral" }} sx={{ mb: 5, fontWeight: "bold" }} variant="h4">
                Reviews of our customers.
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                   <img sx={{width:"200px"}} src={reviewPoster} alt="" />
                   <br />
                   <img sx={{width:"200px"}} src={reviewPoster2} alt="" />
                   <br />
                   <br />
                   <Typography variant="h6">
                       Buy your car and enjoy life.
                   </Typography>

                </Grid>


                <Grid item xs={12} md={8}>

                    {
                        messages.map(message => <Box>
                            <Paper sx={{ mb: 5 }} style={{ backgroundColor: "lightblue", color: "black" }} elevation={3}>




                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={2}>
                                        <Typography variant="p">
                                            {message.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Typography variant="p">
                                            {message.email}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <Typography variant="p">
                                            {message.message}
                                        </Typography>
                                    </Grid>

                                </Grid>


                            </Paper>

                        </Box>)


                    }
                </Grid>
            </Grid>

        </Container>
    );
};

export default ReviewMessage;


