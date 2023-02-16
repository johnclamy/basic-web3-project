import { useState } from "react";
import data from "../../services/db/temp-data";
import Pet from "./Pet";
import PetCard from "./PetCard";

const PetList = () => {
  const [pets, setPets] = useState<Pet[]>(data as Pet[]);
  const petList = pets.map((pet) => <PetCard key={pet.breed} pet={pet} />);

  return <div>{petList}</div>;
};

export default PetList;
