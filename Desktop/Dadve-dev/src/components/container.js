import styled from 'styled-components'
const Container = styled.div`
  min-height: ${({fullScreen}) => (fullScreen ? "100vh" : "auto")};
  max-width:1170px;
  padding: 0 15px;
  margin: 0 auto;
`

export default Container;