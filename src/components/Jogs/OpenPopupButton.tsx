import styled from 'styled-components';
import openPopupIcon from '../../assets/img/add.svg';

const OpenPopupButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  background-image: url(${openPopupIcon});
  background-size: cover;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 47pt;
    height: 47pt;
  }
`;

export default OpenPopupButton;
