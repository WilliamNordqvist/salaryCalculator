import styled from 'styled-components';

export const FormContainer = styled.section `
  width: 500px;
  height: 90vh; 
  padding: 0 20px;
  border-radius:10px;
  background: #f4a261;
  overflow:scroll;
  
  h1 {
    text-align:center;
    Font-size: 35px;
    color:#264653;
  }

  @media only screen and (max-width: 600px) {
  width:85%;
  height: 98vh;
  }
`; 