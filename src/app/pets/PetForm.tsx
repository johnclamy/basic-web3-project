import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import Path from "../../routes/Path";
import UserAuth from "../../services/auth/UserAuth";

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
  const [behaviour, setBehaviour] = useState({
    "Family friendly": 0,
    "Friendly with kids": 0,
    "Good with other dogs": 0,
  });

  const [errors, setErrors] = useState<Error>({ name: "", message: "" });
  const isInvalid: boolean =
    breed.trim() === "" ||
    ownerId.trim() === "" ||
    price === 0 ||
    featureOne.trim() === "" ||
    featureTwo.trim() === "" ||
    featureThree.trim() === "" ||
    description.trim() === ""; /*
    behaviour["Family friendly"] === 0 ||
    behaviour["Friendly with kids"] === 0 ||
    behaviour["Good with other dogs"] === 0; */
  useEffect(() => {
    setOwnerId(user?.uid);
  }, [ownerId, setOwnerId]);

  const handleSelect = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBehaviour((prev) => {
      return { ...prev, [name]: Number(value) };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ name: "", message: "" });
    const keyFeatures = [featureOne, featureTwo, featureThree];
    console.log(ownerId, breed, price, keyFeatures, description, behaviour);
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
      <Form.Group className="mb-3">
        <Form.Select
          className="mb-1"
          size="lg"
          onChange={handleSelect}
          name='"Family friendly"'
        >
          <option>Is a family friendly pet?</option>
          <option value="1">Not friendly at all</option>
          <option value="2">Can be friendly occasionally</option>
          <option value="3">Mostly a friendly pet</option>
          <option value="4">Is a friendly pet</option>
          <option value="5">Is a very friendly pet</option>
        </Form.Select>
        <Form.Select
          className="mb-1"
          size="lg"
          onChange={handleSelect}
          name='"Friendly with kids"'
        >
          <option>Is friendly with kids?</option>
          <option value="1">Not friendly at all</option>
          <option value="2">Can be friendly occasionally</option>
          <option value="3">Mostly friendly</option>
          <option value="4">Is friendly</option>
          <option value="5">Is very friendly</option>
        </Form.Select>
        <Form.Select
          className="mb-1"
          size="lg"
          onChange={handleSelect}
          name='"Good with other dogs"'
        >
          <option>Is friendly with other dogs?</option>
          <option value="1">Not friendly at all</option>
          <option value="2">Can be friendly occasionally</option>
          <option value="3">Mostly friendly</option>
          <option value="4">Is friendly</option>
          <option value="5">Is very friendly</option>
        </Form.Select>
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
