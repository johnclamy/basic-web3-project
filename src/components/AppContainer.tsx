import { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";

type AppContainerProps = {
  children: ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default AppContainer;
