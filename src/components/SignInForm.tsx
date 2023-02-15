import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import SignUpLink from "./SignUpLink";
import Path from "../routes/Path";
import UserAuth from "../services/auth/UserAuth";

type Errors = {
  name: string;
  message: string;
};

const SignInForm = () => {
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Error>({ name: "", message: "" });

  const isInvalid = email.trim() === "" || password.trim() === "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ name: "", message: "" });
    try {
      await signIn(email, password);
      navigate(Path.HOME);
      console.log("user has signed in.");
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
      <Button
        disabled={isInvalid}
        className="btn btn-primsry text-uppercase"
        type="submit"
      >
        sign in
      </Button>
      {errors.name && <p>{errors.message}</p>}
      <SignUpLink />
    </Form>
  );
};

export default SignInForm;
