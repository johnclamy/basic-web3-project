import { ref } from "firebase/storage";
import { storage } from "../firebase";

export const petImagesRef = ref(storage, "images/");
