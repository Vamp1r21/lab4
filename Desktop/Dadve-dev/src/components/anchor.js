import React from 'react'
import styled, {keyframes} from 'styled-components';
import {FaArrowDown} from 'react-icons/fa';

const Anchor = ({path}) => {
  return(
    <AnchorLink href={path}>
      <Icon />
    </AnchorLink>
  );
}

const UpDown = keyframes`
  0% {transform: translateY(0)};
  100% {transform: translateY(30%)};
`;

const AnchorLink = styled.a`
  color: #ffffff;
  &:hover,&:focus {
    color: #C31925;
  }
  &:active {
    color: #ffffff;
  }
`

const Icon= styled(FaArrowDown)`
  position: absolute;
  font-size: 48px;
  bottom: 10%;
  left: 50%;
  transition: all .5s;
  animation: ${UpDown} ease-in 1s infinite alternate;
`
export default Anchor;