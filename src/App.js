import './App.css';
import Home from "../src/pages/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Joice from './pages/Joice';
import Compo from './pages/Compo';
import Choice from './pages/Choice';
import Check from './pages/Check';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/joice">
            <Joice />
          </Route>
          <Route exact path="/compo">
            <Compo />
          </Route>
          <Route exact path="/choice">
            <Choice />
          </Route>
          {/* <Route exact path="/check">
            <Check />
          </Route> */}
          
        </Switch>
      
    </BrowserRouter>
    </>
  );
}

export default App;
