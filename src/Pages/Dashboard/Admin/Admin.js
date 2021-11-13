import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import './Admin.css'
const Admin = () => {
    const { user } = useAuth();
    const [totalUsers, setTotalUsers] = useState([])
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch('https://still-taiga-17491.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setTotalUsers(data));
    }, []);
   
    const onSubmit = data => {
        fetch('https://still-taiga-17491.herokuapp.com/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Added Successfully');
                    reset()
                }
            });

    }
    return (
        <Box>
        
            <Container>
                <Typography style={{ color: "lightcoral" }} variant="h5">
                    Fill the form to make admin.

                </Typography>
                <Box>
                    {
                        totalUsers.map(currentUser => <Paper sx={{ my: 5, ml: 30, width: "50%" }} elevation={3}> {
                            user.email === currentUser.email &&

                            <form className="booking" onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={currentUser.displayName} />
                                <input type="email" {...register("email")} placeholder="Email" defaultValue={currentUser.email} />
                                


                                <input className="btn btn-primary order-submin" type="submit" value="Submit" />


                            </form>


                        }</Paper>)
                    }
                </Box>

            </Container>
            <Footer/>
        </Box>



    );
};

export default Admin;