import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routeName as jogsRouteName } from '../../pages/Jogs';
import logo from '../../assets/img/logo.svg';

const Logo: React.FC = () => {
  return (
    <Container>
      <Link to={jogsRouteName}>
        <img alt="logo" src={logo}></img>
      </Link>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  height: 56px;
  img {
    height: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 37pt;
  }
`;
