export default function Contact() {
  return (
    <>
      <section className="contact-banner">
        <h1>Contact</h1>
        <p>Home &gt; Contact</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch With Us</h2>
          <p>
            For more information about our products & services, please feel free
            to drop us an email. Our staff is always here to help you out.
          </p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>236 5th SE Avenue, New York, United States</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>
              Mobile: +1 234 567 890 <br /> Hotline: +1 234 567 891
            </p>
          </div>

          <div className="info-box">
            <h3>⏰ Working Time</h3>
            <p>
              Monday–Friday: 9:00 – 22:00 <br /> Saturday–Sunday: 9:00 – 21:00
            </p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
