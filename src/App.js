import axios from 'axios';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import HealthProductDetails from './Pages/HealthProductDetails/HealthProductDetails';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import MainCart from './Pages/MainCart/MainCart';
import MainCheckout from './Pages/MainCheckout/MainCheckout';
import MainSubscribe from './Pages/MainSubscribe/MainSubscribe';
import MenuPricing from './Pages/MenuPricing/MenuPricing';
import MyProfile from './Pages/MyProfile/MyProfile';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
require('dotenv').config()



axios.defaults.baseURL = process.env.BASE_URL || "http://localhost:5000/api/v1";

if(sessionStorage.token){

  axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.token}`;
}


export const UserContext = createContext();
function App() {

  const userData = {}
  const data = {userData, orders: []};
  const [loggedInUser, setLoggedInUser] = useState(data);
 


  return (
    < >
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <ScrollToTop />
          <Switch>
            
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/prod/:id" component={ProductDetails} />
            <Route path="/subscribe/:id?" component={MainSubscribe} />
            <Route path="/cart" component={MainCart} />
            <Route path="/pricing" component={MenuPricing} />
            <Route path="/checkout" component={MainCheckout} />
            <Route path="/health/prod/:id" component={HealthProductDetails} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/profile">
              <MyProfile />
            </PrivateRoute>

            

            
            <Route path="*" component={NotFound} />

          </Switch>
        </Router>
      </UserContext.Provider>

    </>
  );
}

export default App;
