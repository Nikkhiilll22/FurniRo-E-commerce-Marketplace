// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react';


const CartContext = createContext();

function parsePrice(priceStr) {
  // Convert strings like "₹1,200" or "1,200" into number 1200
  if (!priceStr) return 0;
  const onlyDigits = String(priceStr).replace(/[^0-9.-]+/g, '');
  return Number(onlyDigits) || 0;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      // keep original price string (priceRaw) and numeric price (priceNum)
      const priceNum = parsePrice(product.price);
      return [...prev, { ...product, qty: 1, priceNum, priceRaw: product.price }];
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const totalQty = cart.reduce((acc, it) => acc + (it.qty || 0), 0);
  const subtotal = cart.reduce((acc, it) => acc + (it.priceNum || 0) * (it.qty || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalQty, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
