import { useEffect, useState } from "react";
// import data from "../../services/db/temp-data";
import Pet from "./Pet";
import PetCard from "./PetCard";
import { fetchPets } from "../../services/db";

let data: Pet[] | [] = [];

const PetList = () => {
  const [pets, setPets] = useState<Pet[]>(data);
  const petList = pets.map((pet) => <PetCard key={pet.breed} pet={pet} />);

  useEffect(() => {
    fetchPets(setPets);
  }, []);

  console.log(pets);

  return <div>{petList}</div>;
};

export default PetList;
