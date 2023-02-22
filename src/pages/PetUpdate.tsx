import { useSearchParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import FormWrapper from "../components/FormWrapper";
import PetFormUpdate from "../app/pets/PetFormUpdate";

const PetUpdate = () => {
  const [searchparams] = useSearchParams();

  console.log(searchparams.get("id"));

  return (
    <PageWrapper>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <FormWrapper title="Update Pet">
          <PetFormUpdate id={searchparams.get("id")} />
        </FormWrapper>
      </div>
    </PageWrapper>
  );
};

export default PetUpdate;
