import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import LandingPage from "../pages/Landing";
import AddPetPage from "../pages/AddPet";
import PetDetailsPage from "../pages/PetDetails";
import NotFoundPage from "../pages/NotFound";
import SignUpPage from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import PasswordForgetPage from "../pages/PasswordForget";
import Path from "./Path";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Path.LANDING} element={<LandingPage />} />
      <Route path={Path.HOME} element={<HomePage />} />
      <Route path={Path.ADD_PET} element={<AddPetPage />} />
      <Route path={Path.PET_DETAILS} element={<PetDetailsPage />} />
      <Route path={Path.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={Path.SIGN_UP} element={<SignUpPage />} />
      <Route path={Path.SIGN_IN} element={<SignInPage />} />
      <Route path={Path.PASSWORD_FORGET} element={<PasswordForgetPage />} />
    </Routes>
  );
};

export default AppRoutes;
