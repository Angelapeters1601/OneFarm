import { Link } from "react-router-dom";
import { MagnifyingGlass, ShoppingCart } from "phosphor-react";

// import { MagnifyingGlass } from "phosphor-react";

function Nav() {
  return (
    <nav className="nav">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Faq">Faq</Link>
        <Link to="/Login">
          <input type="text" placeholder="login" />
        </Link>
        <Link>
          <input type="text" placeholder="sign up" />
        </Link>
        <input type="text" placeholder="search"></input>
        <Link to="/Basket">
          <ShoppingCart size={20} color="green" /> Basket
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
