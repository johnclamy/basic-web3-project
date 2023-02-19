import { useEffect, useState } from "react";
// import { listAll, getDownloadURL } from "firebase/storage";
import Pet from "./Pet";
// import PetImages from "./PetImages";
import PetCard from "./PetCard";
import { fetchPets } from "../../services/db";
// import { petImagesRef } from "../../services/storage";

let data: Pet[] | [] = [];

const PetList = () => {
  // const [petImages, setPetImages] = useState<PetImages>([]);
  const [pets, setPets] = useState<Pet[]>(data);
  const petList = pets.map((pet) => (
    <PetCard key={pet.breed} pet={pet} /*img={petImages}*/ />
  ));

  useEffect(() => {
    fetchPets(setPets); /*
    listAll(petImagesRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPetImages((prev) => [...prev, url]);
        });
      });
    });*/
  }, []);

  return <div>{petList}</div>;
};

export default PetList;
