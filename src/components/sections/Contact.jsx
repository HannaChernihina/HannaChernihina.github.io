import React from "react";
import styled from "styled-components";
import EarthCanvas from "../canvas/Earth";
import { Bio } from "../../data/constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const CallButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(11, 100%, 62.2%, 1);
  background: linear-gradient(
    225deg,
    hsla(11, 100%, 62.2%, 1) 0%,
    hsla(11, 100%, 52.2%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(11, 100%, 62.2%, 1) 0%,
    hsla(11, 100%, 52.2%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(11, 100%, 62.2%, 1) 0%,
    hsla(11, 100%, 52.2%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
  color: white;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
        Want to know more ?
        You are welcome!
        </Desc>
        <CallButton href={Bio.telegram} target="_blank">
            Send massage
        </CallButton>
      </Wrapper>
    </Container>
  );
};

export default Contact;
