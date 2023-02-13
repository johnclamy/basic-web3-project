import { Link } from "react-router-dom";
import Path from "../routes/Path";

const SignUpLink = () => (
  <p className="mt-4 mb-2 text-center text-dark small">
    Don't have an account?{" "}
    <Link className="text-decoration-none" to={Path.SIGN_UP}>
      Sign Up.
    </Link>
  </p>
);

export default SignUpLink;
