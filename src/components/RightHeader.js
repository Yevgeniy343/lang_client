import React from "react";
import styled from "styled-components";

const RightHeader = () => {
  return (
    <Wrapper>
      <div className="level">
        <p>Ваш уровень</p>
      </div>
      <div className="discount">
        <div className="rate">
          <p>Ваша персональная скидка:</p>
          <p className="rate-text">0 %</p>
        </div>
        <p className="notice">Скидка учитывается при любых покупках</p>
      </div>
      <div className="balsak">
        <div className="next-level">
          <p>следующий уроовень</p>
          <div className="level-text">
            <p>Бальзак 1%</p>
          </div>
        </div>
        <p className="notice">до него осталось 1 ₽</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--gray-0);
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  /* align-items: center; */
  padding: 1rem;
  flex-wrap: wrap;
  .level,
  .discount,
  .balsak {
    min-width: 200px;
  }
  .rate {
    height: 50px;
    width: 280px;
    background-color: var(--main-1);
    display: flex;
    align-items: center;
    p {
      color: white;
      margin: 1rem 0.5rem;
      font-size: 1.1rem;
    }
    .rate-text {
      font-size: 1.3rem;
      word-break: keep-all;
      margin: 1rem 0;
    }
  }
  .notice {
    font-size: 0.9rem;
  }
  .balsak {
    display: flex;
    flex-direction: column;
    .next-level {
      display: flex;
      /* flex-direction: row; */
      align-items: baseline;
      .level-text {
        margin-left: 1rem;
        padding: 0.5rem;
        background-color: var(--main-1);
        height: 30px;
        p {
          color: white;
          margin: 0;
        }
      }
    }
    p {
      color: var(--clr-grey-4);
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
`;
export default RightHeader;
