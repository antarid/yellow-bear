import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo></Logo>
      <Menu></Menu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 30px 37px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 20pt 25pt;
  }
`;
