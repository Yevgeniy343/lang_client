import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Select = ({ passState }) => {
  const [state, setState] = useState("1");
  passState(state);
  const [arrow, setArrow] = useState(false);

  const arrowHandler = () => {
    setArrow(!arrow);
  };

  const itemHandler = (e) => {
    setState(e.target.textContent);
    setArrow(false);
  };
  return (
    <Wrapper>
      <div className={arrow ? "select select_active" : "select"}>
        <p className="city">{state}</p>
        <div className="icon" onClick={arrowHandler}>
          {arrow === false && <VscChevronDown className="svg_false" />}
          {arrow === true && <VscChevronUp className="svg_true" />}
        </div>
      </div>
      {arrow === true && (
        <motion.div
          className="menu"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <div className="menu2">
            <p className="item" onClick={itemHandler}>
              1
            </p>
            <p className="item" onClick={itemHandler}>
              2
            </p>
            <p className="item" onClick={itemHandler}>
              3
            </p>
            <p className="item" onClick={itemHandler}>
              4
            </p>
            <p className="item" onClick={itemHandler}>
              5
            </p>
          </div>
        </motion.div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  z-index: 100;
  margin-top: 0.15rem;
  .select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    border: 2px solid var(--main-0);
    width: 240px;
    height: 44px;
    /* border-radius: 5px; */
    transition: 1s;

    :hover {
      background-color: var(--main-2);
      color: white;
    }
  }
  .select_active {
    background-color: var(--main-1);
    color: white;
  }
  .city {
    margin: 0;
    letter-spacing: 0.1rem;
  }

  svg {
    font-size: 1.7rem;
    margin-top: 0.4rem;
    cursor: pointer;
  }
  .svg_false {
    color: var(--purple-0);
  }
  .svg_true {
    color: white;
  }
  .menu {
    display: flex;
    justify-content: center;
    /* position: absolute; */
    /* border-radius: 5px; */
    border-left: 2px solid var(--main-1);
    border-right: 2px solid var(--main-1);
    border-bottom: 2px solid var(--main-1);
    width: 240px;
    max-height: 200px;
    background-color: white;

    p {
      margin: 0;
    }
    .item {
      cursor: pointer;
      margin-top: 0.4rem;
      margin-bottom: 0.4rem;
      padding-left: 1rem;
      transition: 1s;
      :hover {
        background-color: var(--main-2);
        color: white;
      }
    }
  }
  .menu2 {
    width: 225px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 5px var(--purple-1); */

      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--main-1);
      border-radius: 10px;
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
export default Select;
