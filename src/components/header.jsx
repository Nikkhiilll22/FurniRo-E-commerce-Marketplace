import { Link } from "react-router-dom";
import { useState } from "react";
import CartSidebar from "./CartSidebar";

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Furniro</div>

        <nav className="nav" id="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="icons">
          <span className="icon">🔍</span>
          <span className="icon">❤️</span>

          {/* 🛒 Cart Icon with Toggle */}
          <span
            className="icon cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            🛒
          </span>

          <span className="icon">👤</span>
        </div>

        <div className="hamburger" id="hamburger">☰</div>
      </div>

      {/* Cart Sidebar */}
      {showCart && <CartSidebar onClose={() => setShowCart(false)} />}
    </header>
  );
}

