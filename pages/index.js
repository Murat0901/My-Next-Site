import Layout from "../components/Layout";
import Link from "next/link";

function index() {
  return (
    <Layout>
      <div className="page-body">
        <div className="home-text">Kişisel Web Siteme Hoş Geldiniz</div>
        <h1 className="pt-3 mt-3">Murat Menzilci</h1>
        <Link href="blog/">
          <a>
            <button className="home-button">Blog Yazılarım</button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export default index;
