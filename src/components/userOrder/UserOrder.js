import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const UserOrder = ({ id, status, nomPul, eventId, name }) => {
  const { events } = useSelector((store) => store.user);

  const [isExtra, setIsExtra] = useState(false);

  const thisEvent = events.find((e) => e._id === eventId);

  return (
    <Wrapper onClick={() => setIsExtra(!isExtra)}>
      <motion.div
        className={
          status === "pending"
            ? "header pending"
            : status === "ok"
            ? "header ok"
            : status === "declined"
            ? "header declined"
            : "header"
        }
      >
        <p>
          <span>конкурс:</span> {thisEvent.name}
        </p>
        <p>
          <span>имя: </span>
          {name}
        </p>
        <p>
          <span>номинация: </span>
          {nomPul}
        </p>
        <p>
          <span>статус:</span> {status}
        </p>
      </motion.div>
      {/* <AnimatePresence> */}
      {isExtra && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 800 },
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 500,
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={
            status === "pending"
              ? "extra pending"
              : status === "ok"
              ? "extra ok"
              : status === "declined"
              ? "extra declined"
              : "extra"
          }
        >
          extras
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    transition: 0.6s;
    cursor: pointer;
    &.pending {
      background: var(--pending-1);
      border: 5px solid var(--pending-1);
    }
    &.ok {
      background: var(--ok-1);
      border: 5px solid var(--ok-1);
    }
    &.declined {
      background: var(--declined-1);
      border: 5px solid var(--declined-1);
    }
    &:hover {
      /* background-color: var(--main-3); */
      background: white;
    }
  }
  span {
    color: var(--clr-grey-1);
  }
  p {
    color: var(--main-0);
    width: 300px;
    margin: 0.5rem;
  }
  .extra {
    height: 500px;
    &.pending {
      border: 5px solid var(--pending-1);
    }
    &.ok {
      border: 5px solid var(--ok-1);
    }
    &.declined {
      border: 5px solid var(--declined-1);
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    span {
    }
    p {
      width: 300px;
    }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default UserOrder;
