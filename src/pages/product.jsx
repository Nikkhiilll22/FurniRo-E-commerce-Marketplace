// src/pages/product.jsx
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import products from '../data/products'
import { useCart } from '../context/CartContext'

export default function Product(){
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  if(!product) return (
    <div className="container">
      <h2>Product not found</h2>
      <Link to="/shop">Back to shop</Link>
    </div>
  )

  function handleAdd() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <section className="container product-page">
      <div className="product-detail">
        <img className="product-img" src={product.image} alt={product.name} />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3 className="price">{product.price}</h3>

          {/* ADD TO CART BUTTON */}
          <div style={{display:'flex', gap:8, marginTop:12}}>
            <button onClick={handleAdd} className="btn">
              Add to Cart
            </button>
            <Link to="/shop" className="btn">Back to Shop</Link>
          </div>

          {added && <div style={{color:'green', marginTop:8}}>Added to cart ✓</div>}
        </div>
      </div>
    </section>
  )
}
