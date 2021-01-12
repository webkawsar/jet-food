import './App.css';
import Header from './Components/Header/Header';
import HeaderMain from './Components/HeaderMain/HeaderMain';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import Subscribe from './Components/Subscribe/Subscribe';
import { createContext, useState } from 'react';
import MainCart from './Components/MainCart/MainCart';


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
              <Header />
              <HeaderMain />
            </Route>

            <Route path="/home">
              <Header></Header>
              <HeaderMain />
            </Route>

            <Route path="/foodcat/:id">
              <CategoryDetails />
            </Route>

            <Route path="/subscribe/:id?">
              <Subscribe />
            </Route>

            <Route path="/cart">
              <MainCart />
            </Route>



          </Switch>
        </Router>
      </UserContext.Provider>

    </>
  );
}

export default App;
