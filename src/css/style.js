import styled from "styled-components";

export const Vitrine = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 30px;
  font-family: "Quicksand", sans-serif;

  div {
    height: 320px;
    width: 230px;
    border: 1px solid rgb(193, 193, 193);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 25px;
  }

  button {
    font-size: 25px;
    background-color: transparent;
    border: none;
    color: cornflowerblue;
  }
`;
