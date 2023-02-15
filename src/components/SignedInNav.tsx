import { User } from "firebase/auth";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserAuth from "../services/auth/UserAuth";
import UserEmail from "../components/UserEmail";
import Path from "../routes/Path";

type SignedInNavProp = {
  user: User | null;
};

const SignedInNav = ({ user }: SignedInNavProp) => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate(Path.LANDING);
      console.log("user is logged out");
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.name);
      }
    }
  };

  return (
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link as={Link} to={Path.HOME}>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to={Path.ADD_PET}>
          Add Pet
        </Nav.Link>
      </Nav>
      <div className="d-flex gap-lg-3">
        {user && <UserEmail email={user.email} />}
        <Button
          className="btn-sm"
          variant="outline-secondary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </Navbar.Collapse>
  );
};

export default SignedInNav;
