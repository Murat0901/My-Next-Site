import Layout from "../components/Layout";
import Link from "next/link";
import { ListGroup, Card } from "react-bootstrap";

function index() {
  return (
    <Layout>
      <section id="home">
        <div className="my-container">
          <h1>Kişisel Websiteme Hoş Geldiniz</h1>
          <p>Blog sayfam için tıklayın</p>

          <Link href="blog/">
            <a>
              <button className="my-btn">Blog Yazılarım</button>
            </a>
          </Link>
        </div>
      </section>
      <section id="about">
        <div className="my-container">
          <h1>About Me</h1>
          <p>I'm a web developer.</p>
          <p>I love JavaScript, Python and React</p>
          <Card>
            <Card.Header>Technologies</Card.Header>
            <ListGroup>
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>Next.Js</ListGroup.Item>
              <ListGroup.Item>Django</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </section>

      <section id="contact">
        <div className="my-container">
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta
            harum ipsa atque, ipsum provident ullam nobis! Ducimus, dolores,
            deserunt asperiores omnis magni consequatur expedita vel in veniam,
            tempore delectus!
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default index;
