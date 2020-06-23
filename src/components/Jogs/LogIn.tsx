import React, { useContext } from 'react';
import styled from 'styled-components';
import logInImage from '../../assets/img/bear-face.svg';
import { Button, FullScreenCenter } from '../common';
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
    <FullScreenCenter>
      <Container>
        <Image></Image>
        <Button onClick={logIn}>Let me in</Button>
      </Container>
    </FullScreenCenter>
  );
};

export default LogIn;

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
