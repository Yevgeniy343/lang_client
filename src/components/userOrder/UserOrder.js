import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import UserChildOrder from "./UserChildOrder";
import UserAdultOrder from "./UserAdultOrder";

const UserOrder = ({
  orderId,
  status,
  nomPul,
  eventId,
  name,
  type,
  number,
}) => {
  const { events } = useSelector((store) => store.user);

  const [isExtra, setIsExtra] = useState(false);

  const thisEvent = events.find((e) => e._id === eventId);

  const collapseHandler = (st) => {
    setIsExtra(st);
  };

  return (
    <Wrapper>
      <motion.div
        onClick={() => setIsExtra(!isExtra)}
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
        {status === "pending" && (
          <p className="c1">
            <span>статус:</span> в обработке
          </p>
        )}
        {status === "ok" && (
          <p className="c1">
            <span>статус:</span> одобрено
          </p>
        )}
        {status === "declined" && (
          <p className="c1">
            <span>статус:</span> отклонено
          </p>
        )}
        <p className="c2">
          <span>номер заявки</span> {number}
        </p>
        <p className="c3">
          <span>конкурс:</span> {thisEvent?.name}
        </p>
        <p className="c4">
          <span>имя: </span>
          {name}
        </p>
        <p className="c5">
          <span>номинация: </span>
          {nomPul}
        </p>
      </motion.div>
      {isExtra && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
            },
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
          {type === "child" && (
            <UserChildOrder
              key={orderId}
              orderId={orderId}
              passState={collapseHandler}
            />
          )}
          {type === "adult" && (
            <UserAdultOrder
              key={orderId}
              orderId={orderId}
              passState={collapseHandler}
            />
          )}
        </motion.div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    margin: 0;
    padding: 0;
  }
  span {
    margin: 0;
    padding: 0;
  }
  .header {
    padding: 0;
    margin: 0;
    justify-content: flex-start;
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
    width: 150px;
    margin: 0;
    padding: 0;
  }

  .extra {
    height: 450px;
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
      margin: 0;
    }
    .c1 {
      width: 150px;
    }
    .c2 {
      width: 170px;
    }
    .c3 {
      width: 230px;
    }
    .c4 {
      width: 230px;
    }
    .c5 {
      width: 230px;
    }
  }

  @media (min-width: 992px) {
    p {
      width: initial;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default UserOrder;
