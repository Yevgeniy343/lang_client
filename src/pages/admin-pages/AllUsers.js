import React, { useEffect } from "react";
import styled from "styled-components";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";
import { getUsers } from "../../features/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import AdminUser from "../../components/adminComponents/adminUser";

const AllUsers = () => {
  const { users, isLoading } = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <AdminNavBar />
      <AdminSideBar />
      {isLoading && <Loading />}
      <Wrapper>
        {users.map((u) => (
          <AdminUser
            key={u._id}
            name={u.name}
            second_name={u.second_name}
            email={u.email}
            phone={u.phone}
            city={u.city}
            job={u.job}
            job_title={u.job_title}
            date={u.date}
            created={u.createdAt}
            updated={u.updatedAt}
            id={u._id}
          />
        ))}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
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
export default AllUsers;
