import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // useParams,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import Reviews from '../Reviews/Reviews';
import Admin from '../Admin/Admin';
import Navigation from '../../Shared/Navigation/Navigation';
const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <br />
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/reviews">
                <Button variant="outlined">Reviews</Button>
            </Link>
            <br />
            <br />

            <Divider />
            <br />

            <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/dashboardHome`}>
                <Button variant="outlined">Dashboard</Button>

            </Link>
            <br />
            <br />

            <Divider />
            <br />

            <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/admin`}>
                <Button variant="outlined">Make Admin</Button>

            </Link>
            <br />
            <br />
            <Divider />
            <br />
            <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/myOrder`}>
                <Button variant="outlined">My Order</Button>

            </Link>
            <br />
            <br />


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                   <Navigation/>

               
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                   
                    <Route exact path={`${path}/admin`}>
                        <Admin />
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder />
                    </Route>
                    <Route path={`${path}`}>
                        <MyOrder />
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews />
                    </Route>

                </Switch>


            </Box>
            
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
