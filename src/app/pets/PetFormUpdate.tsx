import { FormEvent, useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import Path from "../../routes/Path";
import { db } from "../../services/firebase";
import { PET_COLLECTION_TITLE } from "../../services/db";

type PetFormUpdateProps = { id: string | null };
type Errors = { name: string; message: string };

const PetFormUpdate = ({ id }: PetFormUpdateProps) => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  const petId: string | null = searchparams.get("id");
  const docRef = doc(db, PET_COLLECTION_TITLE, petId);

  const [breed, setBreed] = useState("");
  const [price, setPrice] = useState(0);
  const [featureOne, setFeatureOne] = useState("");
  const [featureTwo, setFeatureTwo] = useState("");
  const [featureThree, setFeatureThree] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Errors>({ name: "", message: "" });

  const isInvalid: boolean =
    breed.trim() === "" ||
    price === 0 ||
    featureOne.trim() === "" ||
    featureTwo.trim() === "" ||
    featureThree.trim() === "" ||
    description.trim() === "";

  const getPet = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const pet = docSnap.data();
      setBreed(pet.breed);
      setPrice(pet.price);
      setFeatureOne(pet.keyFeatures[0]);
      setFeatureTwo(pet.keyFeatures[1]);
      setFeatureThree(pet.keyFeatures[2]);
      setDescription(pet.description);
    } else {
      console.error("No such document!");
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateDoc(docRef, {
      breed,
      price,
      description,
      keyFeatures: [featureOne, featureTwo, featureThree],
    });

    setBreed("");
    setPrice(0);
    setFeatureOne("");
    setFeatureTwo("");
    setFeatureThree("");
    setDescription("");

    navigate(Path.HOME);
  };

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
