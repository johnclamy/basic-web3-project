import PageWrapper from "../components/PageWrapper";
import FormWrapper from "../components/FormWrapper";
import SignInForm from "../components/SignInForm";
import ForgotPasswordLink from "../components/ForgotPasswordLink";

const SignIn = () => {
  return (
    <PageWrapper>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <FormWrapper title="Sign In">
          <SignInForm />
        </FormWrapper>
      </div>
      <ForgotPasswordLink />
    </PageWrapper>
  );
};

export default SignIn;
