import React, { useState, useContext, useCallback } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import Filter from './Filter';
import AuthContext from '../../contexts/Auth';

const Header: React.FC = () => {
  const { token } = useContext(AuthContext);
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = useCallback(() => {
    setShowFilter((showFilter) => !showFilter);
  }, []);
  return (
    <>
      <Container>
        <Logo></Logo>
        {!!token && <Menu toggleFilter={toggleFilter} showFilter={showFilter}></Menu>}
      </Container>
      {!!token && showFilter && <Filter></Filter>}
    </>
  );
};

export default Header;

const Container = styled.div`
  padding: 30px 37px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 20pt 25pt;
  }
`;
