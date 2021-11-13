import * as React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Calendar
                    date={date}
                    setDate={setDate}
                ></Calendar>

            </Grid>
            <Grid item xs={6}>


            </Grid>

        </Grid>
    );
};

export default DashboardHome;