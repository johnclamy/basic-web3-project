import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Path from "../routes/Path";
import UserAuth from "../services/auth/UserAuth";
// import { async } from "@firebase/util";

type Error = {
  name: string;
  message: string;
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const { signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState<Error>({ name: "", message: "" });

  const isInvalid =
    email.trim() === "" ||
    password !== passwordConfirm ||
    password.trim() === "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ name: "", message: "" });
    try {
      await signUp(email, password);
      navigate(Path.HOME);
      console.log(email, password);
    } catch (err) {
      if (err instanceof Error) {
        setError({ name: err.name, message: err.message });
      }
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-2">
      <Form.Group className="mb-3">
        <Form.Control
          value={email}
          className="form-control-lg"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          value={password}
          className="form-control-lg"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          value={passwordConfirm}
          className="form-control-lg"
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </Form.Group>
      <Button
        disabled={isInvalid}
        className="btn btn-primsry text-uppercase"
        type="submit"
      >
        sign up
      </Button>
      {error.name && <p>{error.message}</p>}
      <p className="mt-4 mb-2 text-center text-dark small">
        Already have an account?{" "}
        <Link className="text-decoration-none" to={Path.SIGN_IN}>
          Sign In
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
