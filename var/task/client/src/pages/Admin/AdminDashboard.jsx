import React, { useState } from "react";
import Layout from "../../components/LayoutContainer/Layout";
import AdminMenu from "../../components/LayoutContainer/AdminMenu";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(true);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <Layout title="Admin Dashboard">
      <div className="container-fluid h-100">
        <div className="row h-100">
          {/* Sidebar */}
          <div
            className={`sidebar-container ${
              showOffcanvas ? "col-md-2" : "col-md-1"
            } transition-all`}
          >
            <AdminMenu
              toggleOffcanvas={toggleOffcanvas}
              showOffcanvas={showOffcanvas}
            />
          </div>

          {/* Main Content */}
          <div
            className={`content-container ${
              showOffcanvas ? "col-md-10" : "col-md-11"
            } transition-all`}
          >
            <div className="dashboard-content w-100 h-100">
              <div className="dashboard-content-container py-4 h-100">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
