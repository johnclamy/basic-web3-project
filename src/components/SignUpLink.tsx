import { Link } from "react-router-dom";
import Path from "../routes/Path";

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={Path.SIGN_UP}>Sign Up.</Link>
  </p>
);

export default SignUpLink;
