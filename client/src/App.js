import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing.js";
import Activities from "./Components/Activities/Activities.js";
import Country from "./Components/Country/Country";

import { Wrapper } from "./Components/Wrapper/Wrapper";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Wrapper />}>
            <Route index element={<Home />} />
          </Route>
          <Route exact path="/activities" element={<Wrapper />}>
            <Route index element={<Activities />} />
          </Route>
          <Route exact path="/:id" element={<Wrapper />}>
            <Route index element={<Country />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
