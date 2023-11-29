import React from "react";
import styled from "styled-components";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";

const AdmonDiplomPage = () => {
  return (
    <>
      <AdminNavBar />
      <AdminSideBar />
      <Wrapper></Wrapper>;
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default AdmonDiplomPage;
