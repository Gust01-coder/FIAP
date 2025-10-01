import { Outlet } from "react-router-dom";
import AdminNavbar from "./NavBar/AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <main className="mt-15">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
