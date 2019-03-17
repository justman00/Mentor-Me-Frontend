import React from "react";
import styled from "styled-components";

const AnswerStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const UserStyled = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin-bottom: 5%;

  h3 {
    font-size: 1.8rem;
    width: 30%;
  }

  img {
    width: 100%;
    border-radius: 25%;
  }
`;

function AnswerItem(props) {
  return (
    <AnswerStyled>
      <UserStyled>
        <h3>{props.answer.name}</h3>
        <img src={props.answer.photo} alt="user" />
      </UserStyled>
      <p>{props.answer.post}</p>
    </AnswerStyled>
  );
}

export default AnswerItem;
