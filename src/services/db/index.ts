import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Pet from "../../app/pets/Pet";

export const PET_COLLECTION = collection(db, "pets");

export const fetchPets = async (
  setState: React.Dispatch<React.SetStateAction<Pet[]>>
) => {
  const petsSnap = await getDocs(PET_COLLECTION);
  const petsData = petsSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  setState(petsData);
};
