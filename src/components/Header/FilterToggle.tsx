import React from 'react';
import styled from 'styled-components';
import filterImage from '../../assets/img/filter.png';
import filterActiveImage from '../../assets/img/filterActive.png';

const FilterToggle: React.FC<{
  showFilter: boolean;
  toggleFilter: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  mobile?: boolean;
}> = ({ showFilter, toggleFilter, mobile }) => {
  const Container = mobile ? MobileContainer : DesktopContainer;
  return <Container onClick={toggleFilter} showFilter={showFilter}></Container>;
};

export default FilterToggle;

const BaseContainer = styled.div<{ showFilter: boolean }>`
  background-image: url(${(props) => (props.showFilter ? filterActiveImage : filterImage)});
  background-image-size: ${(props) => (props.showFilter ? 26 : 39)}px
    ${(props) => (props.showFilter ? 39 : 26)}px;
  background-position: center;
  background-repeat: no-repeat;
  width: 39px;
  height: 39px;
  cursor: pointer;
`;

const MobileContainer = styled(BaseContainer)`
  margin-right: 45pt;
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const DesktopContainer = styled(BaseContainer)`
  margin-left: calc(49px - 18.5px);
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
