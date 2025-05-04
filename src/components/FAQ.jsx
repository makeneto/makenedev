import styled from "styled-components"

import { faqData } from "../data/faqData"
import FAQItem from "./ui/FAQItem"
import { DescriptionTitle } from "./FavoriteSingers"

const FAQContainer = styled.div`
  width: 60%;
  margin: 10rem auto 6rem;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 1280px) {
    width: 77%;
    margin: 8rem auto 6rem;
  }

  @media (max-width: 884px) {
    width: 92%;
    padding: 0;
    margin: 9rem auto 6rem;
  }

  @media (max-width: 480px) {
    margin: 6rem auto 2rem;
    width: 100%;
    padding: 25px;
  }
`;

export const LargeTitle = styled.h2`
  width: fit-content;
  margin-inline: auto;
  text-align: center;
  color: var(--dark-green);
  margin-bottom: 13px;
  font-size: 3rem;
  font-weight: bold;
  position: relative;

  & span {
    position: absolute;
    top: -40%;
    display: inline-block;
    animation: wave 9s infinite;
  }
  
  & div {
    position: absolute;
    top: 17%;
    right: -6%;
    font-size: .7rem;
    background: var(--light-blue);
    color: black;
    padding: .1rem .4rem;
    border-radius: 50%;
    animation: wave 2s infinite;

    @media (max-width: 480px) {
        top: 14%;
        right: -8%;
        font-size: .6rem;
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  }

  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(-8deg); }
    70% { transform: rotate(14deg); }
    80% { transform: rotate(-4deg); }
    90% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
  }

  @media (max-width: 1919px) {
    font-size: 2.4rem;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
    line-height: 2rem;
  }
`;

export default function FAQ() {
  return (
    <FAQContainer>
      <LargeTitle>FAQ</LargeTitle>
      <DescriptionTitle margin="large">
        Do you have any questions? Here you will find the answers to the most common questions!
      </DescriptionTitle>

      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </FAQContainer>
  );
}
