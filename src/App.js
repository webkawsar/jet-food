import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import { createContext, useState } from 'react';
import MainCart from './Components/MainCart/MainCart';
import Home from './Pages/Home/Home';
import MainSubscribe from './Pages/MainSubscribe/MainSubscribe';
import MainCheckout from './Pages/MainCheckout/MainCheckout';




export const UserContext = createContext();



function App() {

  const userData = {
    name: "Kawsar",
    email: "kawsar@gmail.com"
  }
  const [loggedInUser, setLoggedInUser] = useState({userData});
 


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

            <Route path="/foodcat/:id">
              <CategoryDetails />
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
