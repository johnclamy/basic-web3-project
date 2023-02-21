import { Badge, Button, Card } from "react-bootstrap";
import Pet from "./Pet";

type PetCardProps = {
  key: string;
  pet: Pet;
  /*img: string;*/
};

const PetCard = ({ key, pet /* img */ }: PetCardProps) => {
  return (
    <Card className="mb-2">
      {/*<Card.Img variant="top" src={img} />*/}
      <Card.Body>
        <Card.Title>{pet.breed}</Card.Title>
        <div>
          {pet.keyFeatures.map((feature, indx: number) => (
            <span key={indx}>
              <Badge bg="dark">{feature}</Badge>{" "}
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-end gap-1 mt-2">
          <Button variant="primary" size="sm">
            Edit
          </Button>{" "}
          <Button variant="danger" size="sm">
            Delete
          </Button>
        </div>
      </Card.Body>
      <Card.Body>
        <Card.Text className="mt-0">{pet.description}</Card.Text>
      </Card.Body>
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
