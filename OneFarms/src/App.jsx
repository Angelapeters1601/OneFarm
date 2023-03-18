import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Basket from "./components/Basket/Basket";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUP/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
