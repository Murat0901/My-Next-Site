import { ListGroup, Card } from "react-bootstrap";

function About() {
  return (
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
  );
}

export default About;
