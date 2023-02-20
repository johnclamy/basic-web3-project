import PageWrapper from "../components/PageWrapper";
import FormWrapper from "../components/FormWrapper";
import PetForm from "../app/pets/PetForm";

const AddPet = () => {
  return (
    <PageWrapper>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <FormWrapper title="Add a Pet">
          <PetForm />
        </FormWrapper>
      </div>
    </PageWrapper>
  );
};

export default AddPet;
