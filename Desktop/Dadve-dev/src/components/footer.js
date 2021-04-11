import React from 'react';
import {FaBehance, FaInstagram, FaPhoneAlt} from 'react-icons/fa';
import logo from '../images/logo.svg';
import styled from 'styled-components';
import Container from './container';
import {Link} from 'gatsby';

const Footer = ({page}) => {
    return (
        <footer style={{  marginTop: '500px', background: 'linear-gradient(180deg, #111111 0%, #111111 0.01%, #000000 100%)'}}>
            <Container>
                <FooterRow>
                    <FooterNav>
                        {
                            page ? (
                                <>
                                    <FooterLink to="/">Услуги</FooterLink>
                                    <FooterLink to="/">О компании</FooterLink>
                                    <FooterLink href="#projects">Проекты</FooterLink>
                                    <FooterLink to="/">Контакты</FooterLink>
                                    <FooterLink to="/">Вакансии</FooterLink>
                                </>
                            )
                            :
                            (
                                <>
                                    <FooterLink href="#services">Услуги</FooterLink>
                                    <FooterLink href="#company">О компании</FooterLink>
                                    <FooterLink href="#projects">Проекты</FooterLink>
                                    <FooterLink href="#contacts">Контакты</FooterLink>
                                    <FooterLink href="#vacancies">Вакансии</FooterLink>
                                </>
                            )
                        }
                        
                    </FooterNav>
                    <FooterPhone><FaPhoneAlt />+7(911)345-31-53</FooterPhone>
                </FooterRow>
                <FooterRow underline>
                    <FooterPolitic>
                        <FooterLink href="#" sm>Политика конфидицальности</FooterLink>
                        <FooterLink href="#" sm>Политика использования Cookies</FooterLink>
                    </FooterPolitic>
                    <FooterSocialLink>
                        <a href="https://www.instagram.com/dadve.russian/" target="_blank">
                            <FaInstagram/>
                        </a>
                        <a href="https://www.behance.net/dadve/" target="_blank">
                            <FaBehance/>
                        </a>
                    </FooterSocialLink>
                </FooterRow>
                <FooterLogo href="#home">
                    <img src={logo} alt="logo"/>
                </FooterLogo>
                <FooterCopyRight>Copyright © 2015-2021 Dadve Company. All rights reserved.</FooterCopyRight>
            </Container>
        </footer>
    );
};

const FooterSocialLink = styled.div`
display: flex;
font-size: 25px;

a {
    color: #ffffff;
    transition: all .5s;
    position: relative;
    margin-right: 10px;

    &:hover,&:focus {
        outline: transparent;
        color: #C31925;
    }

    &:active {
        color: #ffffff;
    }

    &:last-child {
        margin-right: 0;
    }
}
`;

const FooterCopyRight = styled.h2`
font-weight: 700;
font-size: 14px;
letter-spacing: 0.135em;
color: #ffffff;
padding-bottom: 40px;
`;

const FooterNav = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 550px;
`;

const FooterPhone = styled.a`
font-weight: 500;
font-size: 14px;
letter-spacing: 0.135rem;
`;

const FooterPolitic = styled.div`
display: flex;
flex-wrap: wrap;
`;

const FooterLogo = styled.a`
margin-bottom: 10px;
display: block;
`;

const FooterLink = styled(Link)`
color: #ffffff;
  font-weight: 600;
  font-size:  ${({sm}) => (sm ? "12px" : "14px")};
  height: 100%;
  margin-right: 100px;
  text-decoration: none;
  transition: all .3s;
  position: relative;
  margin-bottom:${({sm}) => (sm ? "0" : "16px")};

  &:after {
    content: "";
    position: absolute;
    bottom: ${({sm}) => (sm ? "-4px" : "-4px")};
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
      bottom:${({sm}) => (sm ? "0" : "0")};
    }
  }
`;

const FooterRow =   styled.div`
color: #ffffff;
display: flex;
flex-wrap: wrap;
align-items: center;
margin-bottom: 40px;
justify-content: space-between;
border-bottom: ${({underline}) => (underline ? "1px solid #ffffff" : "none")};
`;

export default Footer;