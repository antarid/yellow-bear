import styled from 'styled-components';
import sadFaceImage from '../assets/img/sad-rounded-square-emoticon.svg';

export const Button = styled.button`
  border-radius: 36px;
  border: solid 3px ${(props) => props.theme.colors.light};
  background-color: transparent;
  color: ${(props) => props.theme.colors.light};
  font-size: 18px;
  font-weight: bold;
  padding: 18px 33px;
  line-height: 1;
  cursor: pointer;
  outline: none;
`;

export const AccentButton = styled(Button)`
  color: ${(props) => props.theme.colors.accent};
  border-color: ${(props) => props.theme.colors.accent};
`;

export const FullScreenCenter = styled.div`
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 34pt;
`;

export const SadFace = styled.div`
  background-image: url(${sadFaceImage});
  width: 151px;
  height: 150px;
  background-size: cover;
`;
