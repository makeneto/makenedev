import { useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Item = styled(motion.div)`
  border-bottom: var(--light-border);
  overflow: hidden;

  &:last-child {
    border-bottom: none;
  }
`;

const Question = styled.p`
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 14px 0;
  font-size: 18px;
  color: var(--dark-green);
  cursor: pointer;
  transition: color .3s;
  height: 3rem;

  &:hover {
    color: rgb(67, 145, 50);
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 0;
  }
`;

const Answer = styled(motion.div)`
  font-size: 16px;
  line-height: 1.6rem;
  font-weight: 300;
  color: var(--dark-grey);
  border-radius: 5px;
  padding: 12px 18px 14px 2.3rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 16px 12px 2rem;
  }
`;

const StyledLink = styled.a`
  color: blue;
  text-decoration: none;

  &:link,
  &:visited {
    color: blue;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderAnswer = (text) => {
    const linkRegex = /<a href="(.*?)" target="_blank">(.*?)<\/a>/g;
    const parts = text.split(linkRegex);

    return parts.map((part, index) => {
      if (index % 3 === 0) {
        return part;
      } else if (index % 3 === 1) {
        const href = part;
        const linkText = parts[index + 1];
        return (
          <StyledLink key={index} href={href} target="_blank">
            {linkText}
          </StyledLink>
        );
      }
      return null;
    });
  };

  return (
    <Item
      animate={{ height: isOpen ? "auto" : 50 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Question onClick={() => setIsOpen(!isOpen)}>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FaPlus size={16} />
        </motion.div>
        {question}
      </Question>

      <AnimatePresence>
        {isOpen && (
          <Answer
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderAnswer(answer)}
          </Answer>
        )}
      </AnimatePresence>
    </Item>
  );
}
