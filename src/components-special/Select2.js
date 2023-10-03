import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Select = ({ passState, data, def }) => {
  console.log(def);

  const [state, setState] = useState(def);
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
            {data.map((d) => (
              <p key={d.id} className="item" onClick={itemHandler}>
                {d.label}
              </p>
            ))}
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
    width: 280px;
    height: 44px;
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
    position: absolute;
    /* border-radius: 5px; */
    border-left: 2px solid var(--main-1);
    border-right: 2px solid var(--main-1);
    border-bottom: 2px solid var(--main-1);
    width: 280px;
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
      width: 100%;
      :hover {
        background-color: var(--main-2);
        color: white;
      }
    }
  }
  .menu2 {
    width: 265px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
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
