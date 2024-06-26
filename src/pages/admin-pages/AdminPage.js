import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../components-special/Button";
import { useSelector, useDispatch } from "react-redux";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";
import AdminEvents from "./AdminEvents";
import Event from "../../components/adminComponents/Event";
import EventAdminModal from "../../components/adminModal/eventAdminModal";
import {
  getChildOrders,
  getAdultOrders,
  getUsers,
} from "../../features/adminSlice";

const AdminPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChildOrders());
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Wrapper>
      <AdminNavBar />
      <AdminSideBar />
      <div className="main"></div>
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
