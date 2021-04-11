import React, {useEffect} from "react"
import SEO from "../components/seo"
import logo from '../images/logo.svg'
import styled from 'styled-components'
import {GlobalStyle} from '../styles/global-styles';
import {Link, navigate} from 'gatsby'

const NotFoundPage = () => {
  return(
    <main>
      <GlobalStyle/>
        <NotFoundContainer>
        <SEO title="404: Not found" />
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>Оопс, вы ввели путь, которого не существует.(</NotFoundText>
        <NotFoundLink to="/">
          Вернуться назад
        </NotFoundLink>
      </NotFoundContainer>
    </main>
  )
}

const NotFoundLink = styled(Link)`
  text-decoration: none;
  background-color: #C31925;
  letter-spacing: 0.135rem;
  font-weight: 700;
  border-radius: 5px;
  color: #ffffff;
  padding: .6rem 1rem;
  font-size: 1rem;
  transition: all .5s;
  cursor: pointer;

  &:hover,&:focus {
    outline: transparent;
    color: #C31925;
    background-color: #ffffff;
  }

  &:active {
    background-color: #C31925;
    color: #ffffff;
  }
`;

const NotFoundText = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const NotFoundTitle = styled.h1`
  font-size: 40px;
  color: #C31925;
  margin: 20px 0;
`;

const NotFoundContainer = styled.section`
background-color: #111111;
color: #ffffff;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`;

export default NotFoundPage
