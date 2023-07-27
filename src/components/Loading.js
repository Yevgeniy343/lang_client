import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0;
  width: 100vw;
  height: 90vh;
  margin: 0 auto;
  /* max-width: var(--max-width); */

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  .loading {
    width: 7rem;
    height: 7rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 10px solid var(--main-0);
    border-top-color: var(--main-2);
    animation: spinner 1s linear infinite;
  }

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    width: 95vw;
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
  @media (min-width: 1540px) {
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
