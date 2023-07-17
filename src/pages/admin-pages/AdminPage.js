import React from "react";
import styled from "styled-components";
import Button from "../../components-special/Button";
import { useSelector, useDispatch } from "react-redux";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";
import AdminEvents from "./AdminEvents";
import Event from "../../components/adminComponents/Event";

const AdminPage = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <AdminNavBar />
      <AdminSideBar />
      <div className="main">
        <AdminEvents />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main {
    margin: 1rem;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default AdminPage;
