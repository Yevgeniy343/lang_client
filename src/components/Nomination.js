import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNom } from "../features/adminSlice";

const Nomination = ({ name, link, file, language, id }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="div">
        <p className="name">{name}</p>
        {link === true && <p>доступно прикрепление ссылки</p>}
        {file === true && <p>доступно прикрепление файла</p>}
        {language === true && <p>доступен выбор языка</p>}
        <MdDelete onClick={() => dispatch(deleteNom({ id: id }))} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem;
  display: flex;
  width: 300px;
  .name {
    color: var(--main-0);
    font-size: 1.2rem;
  }

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition2);
    color: var(--main-0);

    :hover {
      color: var(--clr-red-dark);
    }
  }
  @media (min-width: 576px) {
    width: 400px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
  @media (min-width: 1540px) {
  }
`;
export default Nomination;
