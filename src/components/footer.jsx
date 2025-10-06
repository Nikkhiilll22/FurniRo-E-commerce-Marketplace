export default function Footer(){
return (
<footer>
  <div class="container footer-content">
    
    <div class="footer-left">
      <h2 class="footer-logo">Furniro</h2>
      <p class="footer-desc">
        400 University Drive Suite 200 Coral Gables,  
        FL 33134 USA
      </p>
    </div>

    
    <div class="footer-links">
      <h4>Links</h4>
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>

    
    <div class="footer-links">
      <h4>Help</h4>
      <a href="#">Payment Options</a>
      <a href="#">Returns</a>
      <a href="#">Privacy Policies</a>
    </div>

    
    <div class="footer-newsletter">
      <h4>Newsletter</h4>
      <form>
        <input type="email" placeholder="Enter Your Email Address" required />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
  </div>

  <div class="footer-bottom">
    <p>2025 &copy; Furniro. All Rights Reserved</p>
  </div>
</footer>
   

)
}