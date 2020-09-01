import React from 'react';
import * as Styled from './style'
import Inputs from './inputs'

const Form = () => { 
  return (
    <Styled.FormContainer>
      <h1> Lönekalkyl </h1>
      <Inputs/>
    </Styled.FormContainer>
  )
}

export default Form