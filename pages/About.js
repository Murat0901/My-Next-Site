import Layout from "../components/Layout";
import { ListGroup, Card } from "react-bootstrap";


function about() {
  return (
    <Layout>
      <section id="about">
        <div className="my-container">
          <div className="box">
            <h1>About Me</h1>
            <p>I'm a web developer.</p>
            <p>I love JavaScript, Python and React</p>
          </div>
          <div className="box">
          <Card>
            <Card.Header>Technologies</Card.Header>
            <ListGroup>
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>Next.Js</ListGroup.Item>
              <ListGroup.Item>Django</ListGroup.Item>
            </ListGroup>
          </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default about;
