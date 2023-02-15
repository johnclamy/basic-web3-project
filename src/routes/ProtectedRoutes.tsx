import { ReactNode } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserAuth from "../services/auth/UserAuth";
import Path from "./Path";

const ProtectedRoutes = () => {
  const { user } = UserAuth();

  return user ? <Outlet /> : <Navigate to={Path.LANDING} />;
};

export default ProtectedRoutes;
