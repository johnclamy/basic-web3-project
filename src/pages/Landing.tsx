import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Path from "../routes/Path";
import PageWrapper from "../components/PageWrapper";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Card>
        <Card.Header>Welcome to TinyPups pet management services</Card.Header>
        <Card.Body>
          <Card.Title className="display-6 text-primary mb-4">
            Sign Up or Sign In
          </Card.Title>
          <Card.Text className="mb-5 fs-5 fst-italic  text-black-50">
            This <b>pet management service</b> allows you to add pets to the pet
            inventory and have your customers view them <em>instantly</em>.
          </Card.Text>
          <Button
            className="text-uppercase"
            variant="primary"
            onClick={() => navigate(Path.SIGN_IN)}
          >
            sign in
          </Button>
        </Card.Body>
      </Card>
    </PageWrapper>
  );
};

export default Landing;
