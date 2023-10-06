import React from "react";
import styled from "styled-components";
import star from "../../images/—Pngtree—star_735865.png";
import { motion } from "framer-motion";

const Stars = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
        type: "spring",
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <Wrapper>
      <motion.div
        className="star"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <motion.img src={star} alt="" key={index} variants={item} />
        ))}
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    img {
      width: 60px;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Stars;
