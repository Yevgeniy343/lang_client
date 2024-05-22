import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getDiploms } from "../features/user/userSlise";
import Diplom from "../components/UserDiplom";

const DiplomDownload = () => {
  const { user, isLoading, childOrders, adultOrders, diploms } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiploms({ userId: user._id }));
  }, []);

  return (
    <Wrapper>
      <h4>Скачать дипломы</h4>
      <div className="content">
        {diploms.map((d) => (
          <Diplom key={d._id} {...d} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  .content {
    display: flex;
    flex-direction: column;
  }
  h4 {
    margin-bottom: 2rem;
    color: var(--main-0);
  }
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
export default DiplomDownload;
