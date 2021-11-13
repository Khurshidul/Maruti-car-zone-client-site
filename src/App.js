import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import ExploreProducts from './Pages/Home/ExploreProducts/ExploreProducts';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder2 from './Pages/PlaceOrder2/PlaceOrder2';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Reviews from './Pages/Dashboard/Reviews/Reviews';
import OrderConfirm from './Pages/OrderConfirm/OrderConfirm';


function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/explore">
              <ExploreProducts />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/placeOrder/:productsId">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/placeOrder2/:exploreProductsId">
              <PlaceOrder2 />
            </PrivateRoute>
            <PrivateRoute path="/orderConfirm">
              <OrderConfirm/>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/reviews">
            <Reviews/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
