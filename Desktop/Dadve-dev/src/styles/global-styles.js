import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@keyframes opa {
  0%{opacity:0;}
  100%{opacity:1;}
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #111111;
  animation: opa 2s forwards;
}

section {
  padding-top: 60px;
}
`