import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    
      {/* Hero Section */}
      <div className="hello">
        <div className="text">
        <h1>Welcome to Furniro</h1>
        <p>Beautiful furniture for modern homes.</p>
        <p>
          <Link to="/shop" className="btn">
            Shop Now
          </Link>
        </p>
        </div>
      </div>

      {/* Browse Range Section */}
      <section className="browse-range">
        <div className="container">
          <h2 className="section-title">Browse The Range</h2>

          <div className="range-grid">
            <Link className="range-card" to="/shop#dining">
              <img
                src="public\assets\BritDotDesign-8b46e062cea0449698fee377349d26c7.jpg"
                alt="Dining"
              />
              <div className="range-overlay">
                <h3>Dining</h3>
              </div>
            </Link>

            <Link className="range-card" to="/shop#living">
              <img src="public\assets\Warm-Lights.jpg" alt="Living" />
              <div className="range-overlay">
                <h3>Living</h3>
              </div>
            </Link>

            <Link className="range-card" to="/shop#bedroom">
              <img
                src="public\assets\10-best-bedroom-furniture-design-ideas-f.jpg"
                alt="Bedroom"
              />
              <div className="range-overlay">
                <h3>Bedroom</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="products">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="public\assets\Modern-Cafe-Chairs.jpg" alt="Syltherine Sofa" />
              <h3>Syltherine</h3>
              <p className="desc">Stylish cafe chair</p>
              <p className="price">$250</p>
            </div>

            <div className="product-card">
              <img
                src="public\assets\Cafe_Chair_H-0019_background.jpg"
                alt="Leviosa Chair"
              />
              <h3>Leviosa</h3>
              <p className="desc">Minimalist chair</p>
              <p className="price">$180</p>
            </div>

            <div className="product-card">
              <img src="public\assets\download.jpeg" alt="Lolito Sofa" />
              <h3>Lolito</h3>
              <p className="desc">Luxury big sofa</p>
              <p className="price">$550</p>
            </div>

            <div className="product-card">
              <img
                src="public\assets\4+Seater+Sorrento+&+Laguna+Outdoor+Bar+Table+Set.jpg"
                alt="Respira Chair"
              />
              <h3>Respira</h3>
              <p className="desc">Outdoor bar table & stool</p>
              <p className="price">$320</p>
            </div>
          </div>

          <div className="btn-center">
            <Link to="/shop" className="btn">
              Show More
            </Link>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="inspiration">
        <div className="container insp-content">
          <div className="insp-text">
            <h2>50+ Beautiful Rooms Inspiration</h2>
            <p>
              Our designers created beautiful room setups to inspire you.
              Discover your style and bring it home.
            </p>
            <Link to="/inspiration" className="btn">
              Explore More
            </Link>
          </div>

          <div className="insp-gallery">
            <div className="insp-large">
              <img
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800"
                alt="Living Room"
              />
            </div>
            <div className="insp-small">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
                alt="Bedroom"
              />
              <img src="images/images.jpeg" alt="Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Hashtag Section */}
      <section className="furniro-tag">
        <div className="container">
          <h2>
            Share your setup with <span>#FurniroFurniture</span>
          </h2>
          <div className="tag-grid">
            <img
              src="public\assets\4+Seater+Sorrento+&+Laguna+Outdoor+Bar+Table+Set.jpg"
              alt=""
            />
            <img
              src="public\assets\10-best-bedroom-furniture-design-ideas-f.jpg"
              alt=""
            />
            <img src="public\assets\Warm-Lights.jpg" alt="" />
            <img src="public\assets\Modern-Cafe-Chairs.jpg" alt="" />
            <img src="public\assets\Cafe_Chair_H-0019_background.jpg" alt="" />
            <img
              src="public\assets\BritDotDesign-8b46e062cea0449698fee377349d26c7.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
