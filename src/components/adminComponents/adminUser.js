import React from "react";
import styled from "styled-components";
import moment from "moment";

const AdminUser = ({
  name,
  second_name,
  email,
  phone,
  city,
  job,
  job_title,
  date,
  created,
  updated,
  id,
}) => {
  return (
    <Wrapper>
      <div className="main-info">
        <p>Имя:{name}</p>
        <p>Фамилия: {second_name}</p>
        <p>Email: {email}</p>
        <p>Телефон: {phone}</p>
      </div>
      <div className="extra-info">
        <p>Город: {city}</p>
        <p>Место работы: {job}</p>
        <p>Должность: {job_title}</p>
        <p>Дата рождения: {date}</p>
      </div>
      <div className="extra2-info">
        <p>Дата регистрации: {moment(created).format("lll")}</p>
        <p>Дата изменений: {moment(updated).format("lll")}</p>
        <p>id: {id}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  div {
    margin: 1rem;
    width: 300px;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default AdminUser;
