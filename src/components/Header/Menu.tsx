import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { routeName as jogsRouteName } from '../../pages/Jogs';
import { routeName as infoRouteName } from '../../pages/Info';
import Hamburger from './Hamburger';
import FilterToggle from './FilterToggle';
import menuLogo from '../../assets/img/logo-dark.svg';

const menuItems: { title: string; link: string }[] = [
  { title: 'Jogs', link: jogsRouteName },
  { title: 'Info', link: infoRouteName },
  { title: 'Contact us', link: '/contact-us' },
];

const Menu: React.FC<{
  showFilter: boolean;
  toggleFilter: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}> = ({ showFilter, toggleFilter }) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => setIsOpened((isOpened) => !isOpened);
  const closeMenu = () => setIsOpened(false);
  return (
    <>
      <FilterAndHamburger>
        <FilterToggle mobile showFilter={showFilter} toggleFilter={toggleFilter}></FilterToggle>
        <Hamburger isOpened={isOpened} toggle={toggleMenu} />
      </FilterAndHamburger>
      <Container isOpened={isOpened}>
        <MenuLogo onClick={closeMenu}>
          <Link to={jogsRouteName}></Link>
        </MenuLogo>
        {menuItems.map(({ link, title }) => (
          <MenuItemContainer key={title} onClick={closeMenu}>
            <NavLink exact activeClassName="active" to={link}>
              {title}
            </NavLink>
          </MenuItemContainer>
        ))}
        <FilterToggle showFilter={showFilter} toggleFilter={toggleFilter}></FilterToggle>
      </Container>
    </>
  );
};

export default Menu;

const Container = styled.ul<{ isOpened: boolean }>`
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: fixed;
    background-color: ${(props) => props.theme.colors.light};
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.3s ease;
    transform: translateX(${(props) => (props.isOpened ? 0 : 100)}%);
  }
`;

const FilterAndHamburger = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItemContainer = styled.li`
  margin: 0 18.5px;
  a {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.light};
    font-size: 14px;
    font-weight: bold;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    a {
      position: relative;
      padding: 4px;
      &:after {
        transition: all 0.2s ease;
        position: absolute;
        bottom: 0;
        left: 0;
        max-width: 0;
        width: 100%;
        height: 2px;
        background-color: ${(props) => props.theme.colors.light};
        content: '';
        opacity: 0;
      }
      &.active,
      &:hover {
        &:after {
          max-width: 100%;
          opacity: 1;
        }
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 20pt 0;
    a {
      font-size: 25pt;
      color: ${(props) => props.theme.colors.dark};
      &.active {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

const MenuLogo = styled.div`
  position: absolute;
  top: 20pt;
  left: 25pt;
  background-image: url(${menuLogo});
  width: 98pt;
  height: 37pt;
  background-size: cover;
  display: flex;
  a {
    flex: 1;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
