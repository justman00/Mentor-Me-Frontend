import React, { useState } from "react";
import styled from "styled-components";

const FormStyled = styled.form`
  width: 90%;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 5%;

  input {
    padding: 10px;
    font-size: 1.6rem;
    width: 70%;
    border: 2px solid #5574f7;
    border-radius: 15px;
    outline: none;
    &::placeholder {
      opacity: 0.5;
    }
  }

  button {
    width: 25%;
    font-size: 1.4rem;
    color: white;
    background: #5574f7;
    text-align: center;
    padding: 10px;
    border-radius: 15px;
    outline: none;
    cursor: pointer;

    &:hover {
      background: blue;
      transition: all 1s;
    }
  }
`;

function AnswerForm(props) {
  const [val, setVal] = useState("");
  console.log(props);
  function handleSubmit(e) {
    e.preventDefault();
    const formVals = {
      post: val,
      category: props.category,
      user_fk: 1,
      post_fk: props.questionId
    };
    props.addAnswer(formVals).then(() => setVal(""));
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        onChange={e => setVal(e.target.value)}
        value={val}
        placeholder="Add Your Comment"
        type="text"
      />
      <button>Submit</button>
    </FormStyled>
  );
}

export default AnswerForm;
