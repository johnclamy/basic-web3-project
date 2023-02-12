import PageWrapper from "../components/PageWrapper";
import FormWrapper from "../components/FormWrapper";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <PageWrapper>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <FormWrapper title="Sign Up">
          <SignUpForm />
        </FormWrapper>
      </div>
    </PageWrapper>
  );
};

export default SignUp;
