import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  UserCredential,
  User,
} from "firebase/auth";
import { auth } from "../firebase";

type AuthContextProviderProps = { children?: ReactNode };
type UserAuthProps = {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword?: (email: string) => Promise<void>;
};

const UserContext = createContext<UserAuthProps>({} as UserAuthProps);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{ auth, user, signUp, signIn, logout, resetPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};

const UserAuth = () => {
  return useContext(UserContext);
};

export { AuthContextProvider };
export default UserAuth;
