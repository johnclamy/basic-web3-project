import { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => (
  <Container className="my-2 p-3 bg-white text-dark">{children}</Container>
);

export default PageWrapper;
