import React, { useContext } from 'react';
import styled from 'styled-components';
import logInImage from '../../assets/img/bear-face.svg';
import { Button } from '../common';
import AuthContext from '../../contexts/Auth';
import { tryAuth } from '../../api';

const LogIn: React.FC = () => {
  const { authenticate } = useContext(AuthContext);
  const logIn = () => {
    tryAuth()
      .then((res) => res.json())
      .then((res) => authenticate(res.response.access_token));
  };

  return (
    <OuterContainer>
      <Container>
        <Image></Image>
        <Button onClick={logIn}>Let me in</Button>
      </Container>
    </OuterContainer>
  );
};

export default LogIn;

const OuterContainer = styled.div`
  height: calc(100vh - 116px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 34pt;
`;

const Container = styled.div`
  width: 503px;
  height: 379px;
  box-sizing: border-box;
  padding-top: 77px;
  padding-bottom: 36px;
  border-radius: 44px;
  background-color: #e990f9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.div`
  background-image: url(${logInImage});
  width: 160px;
  height: 150px;
  background-size: cover;
`;
