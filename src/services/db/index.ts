import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Pet from "../../app/pets/Pet";

export const fetchPets = async (
  setState: React.Dispatch<React.SetStateAction<Pet[]>>
) => {
  const petsSnap = await getDocs(collection(db, "pets"));
  const petsData = petsSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  setState(petsData);
};
