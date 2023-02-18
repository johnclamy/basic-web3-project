import PageWrapper from "../components/PageWrapper";
import PetList from "../app/pets/PetList";
import { petList } from "../services/db";

const Home = () => {
  return (
    <PageWrapper>
      <PetList />
    </PageWrapper>
  );
};

export default Home;
