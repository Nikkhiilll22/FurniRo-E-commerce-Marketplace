import products from "../data/products";
import { Link } from "react-router-dom";


export default function Shop() {
  return (
    <>
      {/* Shop Banner */}
      <section className="shop-banner">
        <h1>Shop</h1>
        <p>Browse our wide collection of furniture</p>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2 className="section-title">Our Products</h2>

        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <Link to={`/product/${p.id}`}>
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
              </Link>

              <p className="desc">{p.description}</p>
              <p className="price">{p.price}</p>

              {/* Add to cart will later trigger a function */}
              <button onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              qty: 1,
              image: product.image,
                })
          }
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg"
        >
          Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
