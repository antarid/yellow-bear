import React from 'react';
import styled from 'styled-components';
import { Jog as IJog } from '../../interfaces';
import Jog from './Jog';

const JogsList: React.FC<{ jogs: IJog[] }> = ({ jogs }) => {
  return (
    <Container>
      {jogs.map((jog) => (
        <Jog key={jog.id} {...jog}></Jog>
      ))}
    </Container>
  );
};

export default React.memo(JogsList);

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
