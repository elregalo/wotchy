import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './core/pages/home/Home';

const App = () => {
  return (
    <div className="App">
     <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
    </div>
  );
};

export default App;
