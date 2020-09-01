import styled from "styled-components";

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input,
  select {
    width: 100%;
    height: 30px;
    padding: 5px;
    background: transparent;
    border: none;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: medium;
    border-bottom: 2px solid #264653;
    color: black;
    font-size: 15px;
    text-align: center;
  }

  button {
    margin:30px 0 0 0;
    height: 40px;
    background: rgba(38, 70, 83, 1);
    border: none;
    color: #f4a261;
    font-weight: 700;
    font-size: 15px;
    border-radius: 20px;
    cursor: pointer;
    :disabled {
      background: rgba(38, 70, 83, .5);
      cursor:not-allowed;
    }
  }

  .finalSalary{
    color:#264653;
    font-size: 22px;
    font-weight: 700;
    margin: 25px 0;
    * {
      margin: 5px 0;
    }
  }
`;

export const Input = styled.div`
  width: 100%;
  margin: 15px 0;
  text-align: center;

  h2 {
    color: #264653;
    margin-left:15px;
  }

  .radioFlex {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 600px) {
    margin: 5px 0;
  }
`;
