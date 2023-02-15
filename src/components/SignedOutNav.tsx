import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Path from "../routes/Path";

const SignedOutNav = () => {
  const navigate = useNavigate();

  return (
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      ></Nav>
      <div className="d-flex gap-lg-3">
        <Button
          className="btn-sm"
          variant="outline-primary"
          onClick={() => navigate(Path.SIGN_UP)}
        >
          Sign Up
        </Button>
        <Button
          className="btn-sm"
          variant="outline-secondary"
          onClick={() => navigate(Path.SIGN_IN)}
        >
          Sign In
        </Button>
      </div>
    </Navbar.Collapse>
  );
};

export default SignedOutNav;
