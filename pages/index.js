import Layout from '../components/Layout'
import unfetch from 'isomorphic-unfetch'

function index({ blogs }) {
    return (
        <Layout>
            <div>
                <h1 className="color">Murat Menzilci'nin Kişisel Blogu</h1>
                <ul>
                    {blogs.map(blog => (
                        <article className="container">
                            <div className="blog-post">
                                <h2>{blog.title}</h2>
                                <p>{blog.content}</p>
                            </div>

                        </article>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {

    const data = await unfetch('http://localhost:8000/blog/');
    const blogs = await data.json();
    return {
        props: {
            blogs
        }
    }
}

export default index
