import React from 'react';
import styled from 'styled-components'

import Container from './container'
import mapImage from '../images/preview/map.svg'
import dotsImage from '../images/preview/dots.svg'
import Anchor from './anchor'

const Preview = () => {
  return (
    <section id="home">
      <Container fullScreen>
        <PreviewInner>
          <PreviewTitle>
            Реклама, которая работает
          </PreviewTitle>
          <PreviewSubTitle>
            Рекламное агентство
          </PreviewSubTitle>
        </PreviewInner>
        <Anchor path="#services"/>
      </Container>
    </section>
  );
};

const PreviewInner = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
background: url(${mapImage}) no-repeat;
background-position: 100% 50%;
@media screen and (max-width: 992px) {
  background-size: contain;
}

@media screen and (max-width: 768px) {
  background-position: 100% 10%;
}
`

const PreviewTitle = styled.h2`
font-size: 45px;
color: #ffffff;
letter-spacing: .05rem;
max-width: 460px;
line-height: 58.51px;
font-weight: 900;
margin-bottom: 30px;

@media only screen and (max-width: 375px) and (min-width: 320px){
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 88px;
}
@media only screen and (max-width: 320px) {
  font-size: 27px;
  line-height: 30px;
  margin-bottom: 37px;
}
@media only screen and (max-width: 425px) and (min-width: 375px) {
  font-size: 34px;
  line-height: 38.51px;
  margin-bottom: 60px;
}
`

const PreviewSubTitle = styled.h1`
color: #C31925;
letter-spacing: .05rem;
line-height: 29.26px;
font-size: 24px;
font-weight: 900;
margin-bottom: 30px;
position: relative;

&:after {
  content: "";
  position: absolute;
  background-image: url(${dotsImage});
  width: 213px;
  height:90px;
  top: 180%;
  left: 0;
}

@media only screen and (max-width: 375px) and (min-width: 320px){
    line-height: 16.26px;
    font-size: 17.2px;}

    @media only screen and (max-width: 320px) {
    line-height: 15.26px;
    font-size: 17px;}
`

export default Preview;