import { Outlet } from "react-router-dom";
import AdminNavbar from "./NavBar/AdminNavbar";
import AdminSidebar from "./Sidebar/AdminSidebar";
import { useState, useEffect } from "react";

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSidebarToggle = (collapsed) => {
    setSidebarCollapsed(collapsed);
    if (window.innerWidth <= 992) {
      setSidebarOpen(!collapsed);
    }
  };

  const closeSidebar = () => {
    if (window.innerWidth <= 992) {
      setSidebarOpen(false);
      const sidebar = document.querySelector('.admin-sidebar');
      if (sidebar) {
        sidebar.classList.remove('collapsed');
        setSidebarCollapsed(false);
      }
    }
  };

  return (
    <div className="admin-layout-wrapper">
      <AdminNavbar onMenuToggle={setSidebarOpen} />
      <div className="admin-content-wrapper">
        <AdminSidebar onToggle={handleSidebarToggle} />
        <main className="admin-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
