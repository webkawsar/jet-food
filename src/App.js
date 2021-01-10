import './App.css';
import Header from './Components/Header/Header';
import HeaderMain from './Components/HeaderMain/HeaderMain';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import Subscribe from './Components/Subscribe/Subscribe';



function App() {

  return (
    <div >

      
      <Router>
        <Switch>
          
          <Route exact path="/">
            <Header></Header>
            <HeaderMain></HeaderMain>
          </Route>

          <Route path="/home">
            <Header></Header>
            <HeaderMain></HeaderMain>
          </Route>

          <Route path="/foodcat/:id">
            <CategoryDetails></CategoryDetails>
          </Route>

          <Route path="/subscribe">
            <Subscribe></Subscribe>
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
