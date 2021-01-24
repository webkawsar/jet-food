import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Pages/Home/Home';
import MainSubscribe from './Pages/MainSubscribe/MainSubscribe';
import MainCheckout from './Pages/MainCheckout/MainCheckout';
import { Details } from '@material-ui/icons';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import MainCart from './Pages/MainCart/MainCart';




export const UserContext = createContext();



function App() {

  const userData = {}

  const data = {userData, orders: []};
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


          </Switch>
        </Router>
      </UserContext.Provider>

    </>
  );
}

export default App;
