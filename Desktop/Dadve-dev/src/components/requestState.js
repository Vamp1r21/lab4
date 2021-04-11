import styled, {keyframes} from 'styled-components';

const Open = keyframes`
  0% {opacity: 0}
  100% {transform: scaleY(1);opacity: 1}
`;

export const RequestState = styled.div`
width: 100%;
height:70px;
margin-bottom: 30px;
transform: scaleY(0);
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
border-radius: 5px;
text-align: center;
background-color: ${({state}) => {
  switch(state) {
    case "success": return "#d4edda";
    case "loading": return "#fff3cd";
    case "failed": case "politicNotAgree": case "noEmailAndPhone": case "noPosition": case "noEmail": return "#f8d7da";
    default: return "#ffffff";
  }
}};
opacity: .9;
color: ${({state}) => {
  switch(state) {
    case "success": return "#155724";
    case "loading": return "#856404";
    case "failed": case "politicNotAgree": case "noEmailAndPhone": case "noPosition": case "noEmail": return "#721c24";
    default: return "#ffffff";
  }
}};
border: 1px solid ${({state}) => {
  switch(state) {
    case "success": return "#c3e6cb";
    case "loading": return "#ffeeba";
    case "failed": case "politicNotAgree": case "noEmailAndPhone": case "noPosition": case "noEmail": return "#f5c6cb";
    default: return "transparent";
  }
}};
animation: ${Open} 1s forwards;
`;