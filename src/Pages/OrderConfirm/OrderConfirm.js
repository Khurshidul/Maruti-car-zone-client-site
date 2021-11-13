import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import './OrderConfirm.css';
const OrderConfirm = () => {
    const { user } = useAuth();
    const [totalUsers, setTotalUsers] = useState([])
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch('https://still-taiga-17491.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setTotalUsers(data));
    }, []);
   
    const onSubmit = data => {
        console.log(data)
        fetch('https://still-taiga-17491.herokuapp.com/myOrder', {
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
                    alert('OrderConfirm Information Added Successfully')
                    reset()
                }
            });

    }
    return (
        <Box>
            <Navigation/>
            <Container>
                <Typography style={{ color: "lightcoral" }} variant="h5">
                    Fill the form to confirm your order.

                </Typography>
                <Box>
                    {
                        totalUsers.map(currentUser => <Paper sx={{ my: 5, ml: 30, width: "50%" }} elevation={3}> {
                            user.email === currentUser.email &&

                            <form className="booking" onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={currentUser.displayName} />
                                <input type="email" {...register("email")} placeholder="Email" defaultValue={currentUser.email} />
                                <input type="number" {...register("price")} placeholder="Price" required />
                                
                                <input type="text" {...register("address")} placeholder="Address" required />
                                <input type="number" {...register("phone")} placeholder="Phone number" required />
                                <input type="date" {...register("date")} placeholder="date" required />


                                <input className="btn btn-primary order-submin" type="submit" value="Submit" />


                            </form>


                        }</Paper>)
                    }
                </Box>

            </Container>
        </Box>



    );
};

export default OrderConfirm;