import './App.css';
import Header from './Components/Header/Header';
import HeaderMain from './Components/HeaderMain/HeaderMain';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



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

        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
