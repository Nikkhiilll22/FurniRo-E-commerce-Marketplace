export default function Blog() {
  return (
    <>
      <section className="contact-banner">
        <h1>Blog</h1>
        <p>Home &gt; Blog</p>
      </section>

      <main className="tulip">
        {/* Blog Posts */}
        <section className="sunflower">
          {/* Post 1 */}
          <article className="daisy">
            <img src="/assets/lap.jpg" alt="Blog Post 1" />
            <div className="lily">
              <h2>Going all-in with millennial design</h2>
              <p>
                Millennial design is more than just an aesthetic—it’s a lifestyle
                statement. Characterized by minimalism, functionality, and a touch of
                personality, it blends clean lines with warm textures and bold accents.
                Neutral tones often serve as the foundation, while pops of greenery,
                handcrafted décor, and tech-friendly spaces make the environment both
                stylish and practical.
              </p>
              <a href="#" className="orchid">Read More</a>
            </div>
          </article>

          {/* Post 2 */}
          <article className="daisy">
            <img src="/assets/writ.jpg" alt="Blog Post 2" />
            <div className="lily">
              <h2>Exploring new ways of decorating</h2>
              <p>
                Decorating a home today goes far beyond matching colors and arranging
                furniture—it’s about self-expression and storytelling. People are
                exploring new ways of decorating by blending styles, experimenting with
                bold textures, and incorporating unexpected materials.
              </p>
              <a href="#" className="orchid">Read More</a>
            </div>
          </article>

          {/* Post 3 */}
          <article className="daisy">
            <img src="/assets/desk.webp" alt="Blog Post 3" />
            <div className="lily">
              <h2>Handmade pieces that take time to make</h2>
              <p>
                In a world driven by fast production and instant gratification, handmade
                pieces remind us of the value of patience, skill, and artistry. Each
                handcrafted item carries with it the story of the maker.
              </p>
              <a href="#" className="orchid">Read More</a>
            </div>
          </article>

          {/* Pagination */}
          <div className="lavender">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">Next</a>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="peony">
          <div className="iris">
            <input type="text" placeholder="Search..." />
          </div>

          <div className="camellia">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Crafts</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Handmade</a></li>
              <li><a href="#">Lifestyle</a></li>
            </ul>
          </div>

          <div className="marigold">
            <h3>Recent Posts</h3>
            <ul>
              <li><a href="#">Going all-in with millennial design</a></li>
              <li><a href="#">Exploring new ways of decorating</a></li>
              <li><a href="#">Handmade pieces that take time to make</a></li>
            </ul>
          </div>
        </aside>
      </main>

      
    </>
  )
}
