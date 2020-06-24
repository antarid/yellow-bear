import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routeName } from './Jogs';
import { SadFace, FullScreenCenter, AccentButton } from '../components/common';

const NotFound: React.FC = () => {
  return (
    <FullScreenCenter>
      <SadFace></SadFace>
      <Text>Page not found</Text>
      <Link to={routeName}>
        <AccentButton>Go to main page</AccentButton>
      </Link>
    </FullScreenCenter>
  );
};

export default NotFound;

const Text = styled.div`
  font-size: 24px;
  line-height: 1.21;
  color: #b0b0b0;
  margin: 50px 0;
`;
