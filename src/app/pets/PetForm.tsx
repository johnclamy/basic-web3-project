import { FormEvent, useEffect, useState } from "react";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { PET_COLLECTION } from "../../services/db";
import Path from "../../routes/Path";
import UserAuth from "../../services/auth/UserAuth";
import PetList from "./PetList";

type Errors = {
  name: string;
  message: string;
};

const PetForm = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [breed, setBreed] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [price, setPrice] = useState(0);
  const [featureOne, setFeatureOne] = useState("");
  const [featureTwo, setFeatureTwo] = useState("");
  const [featureThree, setFeatureThree] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState<Error>({ name: "", message: "" });
  const isInvalid: boolean =
    breed.trim() === "" ||
    ownerId.trim() === "" ||
    price === 0 ||
    featureOne.trim() === "" ||
    featureTwo.trim() === "" ||
    featureThree.trim() === "" ||
    description.trim() === "";

  useEffect(() => {
    setOwnerId(user?.uid);
  }, [ownerId, setOwnerId]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ name: "", message: "" });
    const keyFeatures = [featureOne, featureTwo, featureThree];
    const pets = {
      ownerId,
      breed,
      price,
      keyFeatures,
      description,
    };
    await addDoc(PET_COLLECTION, pets);

    console.log(ownerId, breed, price, keyFeatures, description);

    setBreed("");
    setOwnerId("");
    setPrice(0);
    setFeatureOne("");
    setFeatureTwo("");
    setFeatureThree("");
    setDescription("");
  };
  /*
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
  };*/

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
        <Form.Label>Please provide a full description of your pet</Form.Label>
        <Form.Control
          value={description}
          as="textarea"
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button
        disabled={isInvalid}
        className="btn btn-primsry text-uppercase"
        type="submit"
      >
        add pet
      </Button>
      {errors.name && <p>{errors.message}</p>}
    </Form>
  );
};

export default PetForm;
