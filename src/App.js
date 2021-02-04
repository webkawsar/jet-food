import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import HealthProductDetails from './Pages/HealthProductDetails/HealthProductDetails';
import HealthShots from './Pages/HealthShots/HealthShots';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import MainCart from './Pages/MainCart/MainCart';
import MainCheckout from './Pages/MainCheckout/MainCheckout';
import MainSubscribe from './Pages/MainSubscribe/MainSubscribe';
import MenuPricing from './Pages/MenuPricing/MenuPricing';
import ProductDetails from './Pages/ProductDetails/ProductDetails';





export const UserContext = createContext();



function App() {

  const userData = {}
  const data = {userData, orders: [], email: "web.kawsarahmed@gmail.com"};
  const [loggedInUser, setLoggedInUser] = useState(data);
 


  return (
    < >

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/prod/:id">
              <ProductDetails />
            </Route>

            <Route path="/subscribe/:id?">
              <MainSubscribe />
            </Route>

            <Route path="/cart">
              <MainCart />
            </Route>

            <Route path="/checkout">
              <MainCheckout />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/pricing">
              <MenuPricing />
            </Route>

            <Route exact path="/health">
              <HealthShots />
            </Route>

            <Route exact path="/health/prod/:id">
              <HealthProductDetails />
            </Route>




            {/* <Route exact path="/admin" render={() => <Redirect to="/admin/dashboard" />} />
            
            <PrivateRoute path="/admin">
              <Dashboard />
            </PrivateRoute> */}

            <Route path="*">
              <NotFound />
            </Route>
      
            

          </Switch>
        </Router>
      </UserContext.Provider>

    </>
  );
}

export default App;
