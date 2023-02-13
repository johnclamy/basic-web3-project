import { Link } from "react-router-dom";
import Path from "../routes/Path";

const ForgotPasswordLink = () => (
  <p className="mt-4 mb-2 text-center text-dark small fw-bold">
    <Link className="text-decoration-none" to={Path.PASSWORD_FORGET}>
      Forgot Password?
    </Link>
  </p>
);

export default ForgotPasswordLink;
