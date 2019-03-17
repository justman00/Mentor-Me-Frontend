import React from "react";
import AnswerItem from "./AnswerItem";

function AnswerList(props) {
  return (
    <div>
      {props.answers.map(answer => (
        <AnswerItem key={answer.post_id} answer={answer} />
      ))}
    </div>
  );
}

export default AnswerList;
