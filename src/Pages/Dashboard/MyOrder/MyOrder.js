import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));





const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://still-taiga-17491.herokuapp.com/myOrder')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, []);
    const handleDelete = id => {
        const url = `https://still-taiga-17491.herokuapp.com/myOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure to delete?');

                    const remainingOrder = orders.filter(order => order._id !== id);
                    setOrders(remainingOrder);

                }

            })
    }
    return (
        
            <TableContainer sx={{ height: "500px" }} component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Address&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Date&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Manage&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.email}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                                <StyledTableCell align="right">{row.address}</StyledTableCell>
                                <StyledTableCell align="right">{row.date}</StyledTableCell>
                                <Button onClick={() => handleDelete(row._id)} align="right" sx={{ width: "100px" }} variant="contained">Delete</Button>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
          
    );
}
export default MyOrder;