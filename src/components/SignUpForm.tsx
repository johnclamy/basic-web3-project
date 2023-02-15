import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Path from "../routes/Path";
import UserAuth from "../services/auth/UserAuth";

type Errors = {
  name: string;
  message: string;
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const { signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<Errors>({ name: "", message: "" });

  const isInvalid =
    email.trim() === "" ||
    password !== passwordConfirm ||
    password.trim() === "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ name: "", message: "" });
    try {
      await signUp(email, password);
      navigate(Path.HOME);
      console.log("user has signed up!");
    } catch (err) {
      if (err instanceof Error) {
        setErrors({ name: err.name, message: err.message });
      }
      console.error("Unhandled error!");
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
      {errors.name && <p>{errors.message}</p>}
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
