import { Alert } from "react-bootstrap";

type UserEmailProps = {
  email?: string | null;
};

const UserEmail = ({ email }: UserEmailProps) => (
  <Alert className="mx-2 p-2 bg-white text-black-50 border-0">{email}</Alert>
);

export default UserEmail;
