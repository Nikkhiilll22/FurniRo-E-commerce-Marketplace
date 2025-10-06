// src/components/CartSidebar.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartSidebar({ onClose }) {
  const { cart, removeFromCart, clearCart, subtotal } = useCart();

  return (
    <aside className="cart-sidebar" style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '320px',
      maxWidth: '90vw',
      height: '100vh',
      background: '#fff',
      boxShadow: '-4px 0 12px rgba(0,0,0,0.15)',
      zIndex: 60,
      padding: '16px',
      overflowY: 'auto'
    }}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
        <h3 style={{margin:0}}>Your Cart</h3>
        <button onClick={onClose} aria-label="Close cart" style={{fontSize:18, background:'transparent', border:'none',color:'black'}}>✖</button>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul style={{listStyle:'none', padding:0, margin:0}}>
            {cart.map(item => (
              <li key={item.id} style={{display:'flex', justifyContent:'space-between', gap:12, marginBottom:12, alignItems:'center'}}>
                <div>
                  <div style={{fontWeight:600}}>{item.name}</div>
                  <div style={{fontSize:13, color:'#555'}}>{item.qty} × {item.priceRaw ?? item.price}</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{marginBottom:8}}>₹{( (item.priceNum || 0) * item.qty ).toLocaleString('en-IN')}</div>
                  <button onClick={() => removeFromCart(item.id)} style={{background:'transparent', border:'none', color:'#d00'}}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div style={{borderTop:'1px solid #eee', paddingTop:12, marginTop:12}}>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:12}}>
              <strong>Subtotal</strong>
              <strong>₹{(subtotal).toLocaleString('en-IN')}</strong>
            </div>
            <div style={{display:'flex', gap:8}}>
              <button onClick={clearCart} style={{flex:1, padding:'8px', border:'1px solid #ccc', background:'#fff'}}>Clear</button>
              <button style={{flex:1, padding:'8px', border:'none', background:'#0a84ff', color:'#fff'}}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
