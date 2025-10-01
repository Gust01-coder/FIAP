import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <NavBarContainer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
