import PageWrapper from "../components/PageWrapper";
import FormWrapper from "../components/FormWrapper";
import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";
import Path from "../routes/Path";

const SignUp = () => {
  return (
    <PageWrapper>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <FormWrapper>
          <SignUpForm />
        </FormWrapper>
      </div>
    </PageWrapper>
  );
};

export default SignUp;
