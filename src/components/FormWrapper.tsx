import { ReactNode } from "react";
import Card from "react-bootstrap/Card";

type FormWrapperProps = {
  children: ReactNode;
  title: string;
};

const FormWrapper = ({ children, title }: FormWrapperProps) => (
  <Card style={{ maxWidth: "400px" }}>
    <Card.Body>
      <Card.Title className="text-center mb-4">{title}</Card.Title>
      {children}
    </Card.Body>
  </Card>
);

export default FormWrapper;
