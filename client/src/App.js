import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing.js";
import Activities from "./Components/Activities/Activities.js";
import Country from "../src/Components/Country/Country";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          < Route exact path="/" component= {Landing} />
          < Route exact path="/home" component= {Home} />
          < Route exact path="/activities" component= {Activities} />
          < Route exact path="/:id" component= {Country} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
