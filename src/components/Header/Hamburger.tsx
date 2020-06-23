import React from 'react';
import styled from 'styled-components';

const Hamburger: React.FC<{ isOpened: boolean; toggle: () => void }> = ({ isOpened, toggle }) => (
  <Container isOpened={isOpened} onClick={toggle}>
    <span></span>
    <span></span>
    <span></span>
  </Container>
);

export default Hamburger;

const Container = styled.div<{ isOpened: boolean }>`
  position: relative;
  z-index: 10;
  width: 28pt;
  height: 24pt;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    border-radius: 1pt;
    background-color: #fff;
    display: inline-block;
    height: 23%;
    width: 100%;
  }
  span {
    transition: all 0.3s ease;
    ${(props) =>
      props.isOpened &&
      `
        background-color: #B0ABAB;
        &:nth-child(1) {
          transform: translateY(170%) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-170%) rotate(-45deg);
        }
    `}
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
