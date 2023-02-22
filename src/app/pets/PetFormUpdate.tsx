import { FormEvent, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import UserAuth from "../../services/auth/UserAuth";
import Path from "../../routes/Path";

type PetFormUpdateProps = { id: string | null };
type Errors = { name: string; message: string };

const PetFormUpdate = ({ id }: PetFormUpdateProps) => {
  const [searchparams] = useSearchParams();

  const [breed, setBreed] = useState("");
  const [ownerId, setOwnerId] = useState<string | null>("");
  const [price, setPrice] = useState(0);
  const [featureOne, setFeatureOne] = useState("");
  const [featureTwo, setFeatureTwo] = useState("");
  const [featureThree, setFeatureThree] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Errors>({ name: "", message: "" });

  const isInvalid: boolean =
    breed.trim() === "" ||
    ownerId?.trim() === "" ||
    price === 0 ||
    featureOne.trim() === "" ||
    featureTwo.trim() === "" ||
    featureThree.trim() === "" ||
    description.trim() === "";

  useEffect(() => {
    setOwnerId(searchparams.get("id"));
  }, [ownerId, setOwnerId]);

  console.log(ownerId);

  const handleSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit} className="mb-2">
      <Form.Group className="mb-3">
        <Form.Control
          value={breed}
          className="form-control-lg"
          type="text"
          placeholder="Breed of your dog..."
          onChange={(e) => setBreed(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          value={featureOne}
          className="form-control-lg"
          type="text"
          placeholder="Feature one..."
          onChange={(e) => setFeatureOne(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          value={featureTwo}
          className="form-control-lg"
          type="text"
          placeholder="Feature two..."
          onChange={(e) => setFeatureTwo(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          value={featureThree}
          className="form-control-lg"
          type="text"
          placeholder="Feature one..."
          onChange={(e) => setFeatureThree(e.target.value)}
        />
      </Form.Group>

      <InputGroup size="lg" className="mb-3">
        <InputGroup.Text>Price in pounds (£)</InputGroup.Text>
        <Form.Control
          type="text"
          value={price.toString()}
          aria-label="Amount (to the nearest pound sterling)"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <Form.Group className="mb-3">
        <Form.Label>Brief description of your pet</Form.Label>
        <Form.Control
          value={description}
          as="textarea"
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button
        disabled={isInvalid}
        className="btn btn-success text-uppercase"
        type="submit"
      >
        update
      </Button>
      {errors.name && <p>{errors.message}</p>}
    </Form>
  );
};

export default PetFormUpdate;
