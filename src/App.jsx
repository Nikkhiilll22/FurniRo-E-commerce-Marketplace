import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Product from "./pages/product";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Features from "./components/features";
import Login from "./pages/Login";

export default function App() {
  const location = useLocation();

  // Normalize the path to lowercase so '/Login' also matches
  const isLoginPage = location.pathname.toLowerCase() === "/login";

  return (
    <>
      {/* Hide Header on Login page */}
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Hide Features on Login page */}
      {!isLoginPage && <Features />}

      <Footer />
    </>
  );
}



