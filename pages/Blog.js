import BlogNavigation from "../components/BlogNavigation";
import Footer from "../components/Footer"
import unfetch from "isomorphic-unfetch";

function Blog({ blogs }) {
  return (
      <div className="blog">
        <BlogNavigation />
        <div className="my-container">
          <h1>Kişisel Notlarım</h1>
          <ul>
            {blogs.map((blog) => (
              <article>
                <div className="blog-post">
                  <h2 className="blog-title">{blog.title}</h2>
                  <p>{blog.content}</p>
                  <p>{blog.dateTime}</p>
                </div>
              </article>
            ))}
          </ul>
        </div>
      <Footer />
      </div>

  );
}

export default Blog;

export async function getStaticProps() {
  const data = await unfetch("http://localhost:8000");
  const blogs = await data.json();
  return {
    props: {
      blogs,
    },
  };
}
