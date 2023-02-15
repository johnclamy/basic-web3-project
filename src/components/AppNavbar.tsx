import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../components/Logo";
import Path from "../routes/Path";
import UserAuth from "../services/auth/UserAuth";
import SignedInNav from "./SignedInNav";
import SignedOutNav from "./SignedOutNav";

const AppNavbar = () => {
  const { user } = UserAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to={user ? Path.HOME : Path.LANDING}>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {user ? <SignedInNav user={user} /> : <SignedOutNav />}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
