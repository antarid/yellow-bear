import React, { useContext } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import AuthContext from '../../contexts/Auth';

const Header: React.FC = () => {
  const { token } = useContext(AuthContext);
  return (
    <Container>
      <Logo></Logo>
      {!!token && <Menu></Menu>}
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
