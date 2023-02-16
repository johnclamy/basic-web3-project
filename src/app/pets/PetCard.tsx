import { Badge, Card, ListGroup } from "react-bootstrap";
import Pet from "./Pet";

type PetCardProps = {
  key: string;
  pet: Pet;
};

const PetCard = ({ key, pet }: PetCardProps) => {
  return (
    <Card className="mb-2">
      <Card.Img variant="top" src={pet.image} />
      <Card.Body>
        <Card.Title>{pet.breed}</Card.Title>
        {pet.keyFeatures.map((feature, indx) => (
          <span key={indx}>
            <Badge bg="dark">{feature}</Badge>{" "}
          </span>
        ))}
      </Card.Body>
      <Card.Body>
        <Card.Text>{pet.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {Object.entries(pet.behaviour).map(([key, val]) => {
          return (
            <ListGroup.Item>
              {
                <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                  <div className="d-flex justify-content-between">
                    <b className="text-warning">{key}</b>{" "}
                    <Badge bg="secondary rounded-circle">{val}</Badge>
                  </div>
                </div>
              }
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Card.Footer className="d-flex justify-content-between">
        <Card.Link href={`mailto:${pet.ownerEmail}`}>
          {pet.ownerEmail}
        </Card.Link>
        <Card.Text className="lead text-success fw-bold">
          £{pet.price}.00
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default PetCard;
