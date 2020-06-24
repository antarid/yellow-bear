import React from 'react';
import styled from 'styled-components';

const Info: React.FC = () => {
  return (
    <Container>
      <Title>info</Title>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Paragraph>
      <Paragraph>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English.
      </Paragraph>
    </Container>
  );
};

export default Info;

export const routeName = '/info';

const Container = styled.div`
  max-width: 614px;
  margin: 85px auto;
  padding: 0 25pt;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 25pt auto;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 25px;
    margin-bottom: 6px;
  }
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
`;
