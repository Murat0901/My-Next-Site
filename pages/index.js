import Layout from "../components/Layout";
import Link from "next/link";
import { ListGroup, Card } from "react-bootstrap";

function index() {
  return (
    <Layout>
      <section id="home">
        <div className="my-container">
          <img src="https://avatars2.githubusercontent.com/u/47676205?s=460&u=3db26078eadd62852afdf3f952b04d238796761d&v=4"></img>
          <h1>Kişisel Websiteme Hoş Geldiniz</h1>
          <p>Blog sayfam için tıklayın</p>
          <Link href="blog/">
            <a>
              <button className="my-btn">Blog Yazılarım</button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default index;
