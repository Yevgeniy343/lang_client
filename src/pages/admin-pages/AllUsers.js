import React, { useEffect } from "react";
import styled from "styled-components";
import AdminNavBar from "../../components/adminComponents/adminNavbar";
import AdminSideBar from "../../components/adminComponents/adminSidebar";
import { getUsers } from "../../features/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import AdminUser from "../../components/adminComponents/adminUser";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { CSVLink, CSVDownload } from "react-csv";
import _ from "lodash";

const AllUsers = () => {
  const { users, isLoading } = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const headers = [
    { label: "Имя", key: "name" },
    { label: "Фамилияя", key: "second_name" },
    { label: "email", key: "email" },
    { label: "Телефон", key: "phone" },
    { label: "Город", key: "city" },
    { label: "Дата рождения", key: "date" },
    { label: "Место работы", key: "job" },
    { label: "Должность", key: "job_title" },
    { label: "Реферальная ссылка", key: "referal" },
  ];

  return (
    <div>
      <AdminNavBar />
      <AdminSideBar />
      {isLoading && <Loading />}
      <Wrapper>
        <div className="settings">
          <CSVLink data={users} headers={headers} filename={"clients.csv"}>
            <AiOutlineCloudDownload />
          </CSVLink>
        </div>
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
            referal={u.referal}
          />
        ))}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 2rem;

  .settings {
    margin: 1rem;
    box-shadow: var(--bsh-1);
    height: 50px;
    position: fixed;
    top: 60px;
    width: max-content;
    display: flex;
    justify-content: start;
    align-items: center;
    svg {
      font-size: 2rem;
      margin: 1rem;
      color: var(--clr-green-dark);
      cursor: pointer;
      transition: var(--transition2);
      :hover {
        color: var(--clr-green-light);
      }
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .settings {
      padding: 1rem;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default AllUsers;
