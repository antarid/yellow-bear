import React from 'react';
import styled from 'styled-components';
import { Jog as IJog } from '../../interfaces';
import { formatDate } from '../../utils';
import jogImage from '../../assets/img/jog.svg';

const Jog: React.FC<IJog> = ({ date, distance, time }) => (
  <Container>
    <Image></Image>
    <DetailsContainer>
      <Date>{formatDate(date * 1000)}</Date>
      {/* <DescriptionValueContainer key="Speed" value={`${speed}`}></DescriptionValueContainer> */}
      <DescriptionValue description="Distance" value={`${distance} km`}></DescriptionValue>
      <DescriptionValue description="Time" value={`${time} min`}></DescriptionValue>
    </DetailsContainer>
  </Container>
);

const DescriptionValue: React.FC<{ description: string; value: string }> = ({
  description,
  value,
}) => (
  <DescriptionValueContainer>
    <Description>{description}: </Description>
    <Value>{value}</Value>
  </DescriptionValueContainer>
);

export default Jog;

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  }
`;

const Image = styled.div`
  background-image: url(${jogImage});
  width: 98px;
  height: 98px;
  background-size: cover;
  margin-right: 46px;
`;

const DetailsContainer = styled.div`
  > div {
    margin: 12px 0;
  }
`;

const Date = styled.div`
  color: #6c6c6c;
`;

const DescriptionValueContainer = styled.div`
  display: flex;
`;

const Description = styled.div`
  font-weight: 500;
`;

const Value = styled.div`
  margin-left: 4px;
  font-weight: 500;
  color: #6c6c6c;
`;
