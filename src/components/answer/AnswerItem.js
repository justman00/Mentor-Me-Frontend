import React from "react";
import styled from "styled-components";

const AnswerStyled = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;

  div {
    width: 60%;
    display: flex;
    align-items: center;
    p {
      font-size: 1.4rem !important;
      text-align: center;
    }
  }
`;

const UserStyled = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;

  h4 {
    font-size: 1.8rem;
    width: 50%;
    color: #5574f7;
    margin-bottom: 4%;
    text-align: center;
    /* width: 100%; */
  }

  img {
    width: 50%;
    border-radius: 25%;
  }
`;

function AnswerItem(props) {
  return (
    <AnswerStyled>
      <UserStyled>
        <h4>{props.answer.name}</h4>
        <img src={props.answer.photo} alt="user" />
      </UserStyled>
      <div>
        <p>{props.answer.post}</p>
      </div>
    </AnswerStyled>
  );
}

export default AnswerItem;
