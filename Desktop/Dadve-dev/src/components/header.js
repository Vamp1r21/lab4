import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import logo from '../images/logo.svg';
import {Link} from 'gatsby';

const Header = ({page}) => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const checkScroll = () => {
    window.scrollY > 0 ? setScrolled(true): setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <header>
      <Nav scrolled={scrolled}>
        <NavInner>
          {page ? (
            <Link href="/"><img src={logo} alt="logo"/></Link>
          )
          :
          (
          <a href="#home">
            <img src={logo} alt="logo"/>
          </a>)
          }
          <BarsButton onClick={() => setNavOpen(() => !navOpen)}>
            <Bars />
          </BarsButton>
          <NavMenu isOpen={navOpen}>
            {
              page ? (
                <>
                  <NavLink href="/#services" onClick={() =>setNavOpen(false)}>Услуги</NavLink>
                  <NavLink href="/#company" onClick={() =>setNavOpen(false)}>Компания</NavLink>
                  <NavLink href="/#projects" onClick={() =>setNavOpen(false)}>Проекты</NavLink>
                  <NavLink href="/#contacts" onClick={() =>setNavOpen(false)}>Контакты</NavLink>
                  <NavLink href="/#vacancies" onClick={() =>setNavOpen(false)}>Вакансии</NavLink>
                </>
              )
              :
              (
                <>
                  <NavLink href="#services" onClick={() =>setNavOpen(false)}>Услуги</NavLink>
                  <NavLink href="#company"onClick={() =>setNavOpen(false)}>Компания</NavLink>
                  <NavLink href="#projects"onClick={() =>setNavOpen(false)}>Проекты</NavLink>
                  <NavLink href="#contacts"onClick={() =>setNavOpen(false)}>Контакты</NavLink>
                  <NavLink href="#vacancies"onClick={() =>setNavOpen(false)}>Вакансии</NavLink>
                </>
              )
            }
            
          </NavMenu>
          {
            page ? 
            (
              <NavBtn to="/">
                Консультация
              </NavBtn>
            )
            :
            (
              <NavBtn href="#contacts">
                Консультация
              </NavBtn>
          )
          }
        </NavInner>
      </Nav>
    </header>
  )
}

const NavInner = styled.div`
  display: flex;
  align-items: center;
  max-width:1170px;
  padding: 0 15px;
  margin: 0 auto;

@media screen and (max-width: 992px) {
  justify-content: space-between;
}
`

const NavBtn = styled(Link)`
  display: flex;
  text-decoration: none;
  background-color: #C31925;
  height: fit-content;
  align-items: center;
  margin-left: auto;
  letter-spacing: 0.135rem;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  color: #ffffff;
  padding: .6rem 1rem;
  font-size: 1rem;
  transition: all .5s;
  cursor: pointer;

  @media screen and (max-width: 1050px) {
    display: none;
    margin-right: 30px;
  }

  &:hover,&:focus {
    outline: transparent;
    color: #C31925;
    background-color: #ffffff;
  }

  &:active {
    background-color: #C31925;
    color: #ffffff;
  }
`

const NavMenu = styled.div`
  display: flex;
  height: 100%;
  margin-left: 80px;
  transition: all .5s;

  @media screen and (max-width: 992px) {
    visibility: ${({isOpen}) => (isOpen ? "visible" : "hidden")};
    opacity:${({isOpen}) => (isOpen ? "1" : "0")};
    background-color: rgba(0,0,0,.95);
    position: fixed;
    flex-direction: column;
    top: 78px;
    margin-left: 0;
    bottom: 123px;
    left: 0;
    right: 0;
  }
`

const Nav = styled.nav`
  width: 100%;
  background-color: ${({scrolled}) => (scrolled ? '#000000' : 'transparent')};
  box-sizing: content-box;
  padding: ${({scrolled}) => (scrolled ? '10px .5rem' : '20px .5rem')};
  z-index: 100;
  transition: all .5s;
  position: fixed;
  top: 0;

  @media screen and (max-width: 992px) {
    padding: ${({scrolled}) => (scrolled ? '20px .5rem' : '25px .5rem')};
  }
`

const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.135rem;
  font-weight: 500;
  font-size: 14px;
  height: 100%;
  padding: ${({logo}) => (logo ? "none" : "20px 0px")};
  margin: ${({logo}) => (logo ? "none" : "0 15px")};
  text-decoration: none;
  transition: all .3s;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    height:2px;
    background-color: #ffffff;
    width: 100%;
    transition: all .3s
  }

  &:hover,&:focus {
    outline:transparent;

    &:after {
      transform: ${({logo}) => (logo ? "translateX(-50%) scale(0)" : "translateX(-50%) scale(1)")};
    }
  }

  &:active {
    &:after {
      bottom:20px;
    }
  }

  @media screen and (max-width: 992px) {
    font-size: 30px;
    margin: 0;
    height: 150px;
  }
`

const BarsButton = styled.button`
display: none;
color: #ffffff;
transition: all .5s;
background-color: transparent;
width: 100%;
text-align: right;
border: none;

@media screen and (max-width: 992px) {
  display: block;
  cursor: pointer;
}

&:hover,&:focus {
  outline: transparent;

  svg {
    color: #C31925;
  }
}

&:active {
  svg {
    color: #ffffff;
  }
}
`;

const Bars= styled(FaBars)`
  font-size: 40px;
  transition: all .5s;
`

export default Header;
