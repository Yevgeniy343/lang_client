import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNom } from "../features/adminSlice";

const Nomination = ({ name, link, file, id }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <p className="name">{name}</p>
      {link && <p>доступно прикрепление ссылки</p>}
      {!link && <p>доступно прикрепление файла</p>}

      <MdDelete onClick={() => dispatch(deleteNom({ id: id }))} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem;
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
  }
  @media (min-width: 768px) {
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
