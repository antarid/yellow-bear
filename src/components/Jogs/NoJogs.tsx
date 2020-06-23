import React from 'react';
import styled from 'styled-components';
import { Button, FullScreenCenter } from '../common';
import noJogsImage from '../../assets/img/sad-rounded-square-emoticon.svg';

const NoJogs: React.FC<{ openPopup: () => void }> = ({ openPopup }) => {
  return (
    <FullScreenCenter>
      <Image></Image>
      <Text>Nothing is there</Text>
      <StyledButton onClick={openPopup}>Create your first jog</StyledButton>
    </FullScreenCenter>
  );
};

export default NoJogs;

const Image = styled.div`
  background-image: url(${noJogsImage});
  width: 151px;
  height: 150px;
  background-size: cover;
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 1.21;
  color: #b0b0b0;
  margin-top: 47px;
  margin-bottom: 141px;
`;

const StyledButton = styled(Button)`
  color: ${(props) => props.theme.colors.accent};
  border-color: ${(props) => props.theme.colors.accent};
`;
