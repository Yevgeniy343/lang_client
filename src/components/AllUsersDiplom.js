import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import UserDiplom from "../pages/admin-pages/UserDiplom";

function AllUsers() {
  const { users } = useSelector((store) => store.admin);
  return (
    <Wrapper>
      {users.map((u) => (
        <UserDiplom key={u._id} {...u} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
export default AllUsers;
