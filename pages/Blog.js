import Layout from "../components/Layout";
import unfetch from "isomorphic-unfetch";

function Blog({ blogs }) {
  return (
    <Layout>
      <div className="pages">
        <h1>Kişisel Notlarım</h1>
        <ul>
          {blogs.map((blog) => (
            <article className="container">
              <div className="blog-post">
                <h2 className="blog-title">{blog.title}</h2>
                <p>{blog.content}</p>
              </div>
            </article>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  const data = await unfetch("http://localhost:8000/blog/");
  const blogs = await data.json();
  return {
    props: {
      blogs,
    },
  };
}
