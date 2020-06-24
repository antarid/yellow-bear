import React from 'react';
import styled from 'styled-components';
import { AccentButton, FullScreenCenter, SadFace } from '../common';

const NoJogs: React.FC<{ openPopup: () => void }> = ({ openPopup }) => {
  return (
    <FullScreenCenter>
      <SadFace></SadFace>
      <Text>Nothing is there</Text>
      <AccentButton onClick={openPopup}>Create your first jog</AccentButton>
    </FullScreenCenter>
  );
};

export default NoJogs;

const Text = styled.div`
  font-size: 24px;
  line-height: 1.21;
  color: #b0b0b0;
  margin-top: 47px;
  margin-bottom: 141px;
`;
