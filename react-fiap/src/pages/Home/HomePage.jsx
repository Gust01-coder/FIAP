import NavBarContainer from "../../components/NavBar/NavBarContainer";
import HomeHeader from "./HomeHeader";
import OdsOnu from "./sections/OdsOnuSection";
import SolucaoSection from "./sections/SolucaoSection";
import SuccessCasesSection from "./sections/SuccessCasesSection";

const HomePage = () => {
  return (
    <>
      <NavBarContainer />
      <HomeHeader />
      <OdsOnu />
      <SolucaoSection />
      <SuccessCasesSection />
    </>
  );
};

export default HomePage;
