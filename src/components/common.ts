import styled from 'styled-components';

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
