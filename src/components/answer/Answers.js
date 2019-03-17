import React, { useEffect } from "react";
import AnswerList from "./AnswerList";
import AnswerForm from "./AnswerForm";
import { connect } from "react-redux";
import { fetchAnswers } from "../../actions";

function Answers(props) {
  useEffect(() => {
    console.log("mounted");
    props.fetchAnswers(props.questionId);
  }, []);

  return (
    <div>
      <AnswerList answers={props.answers} />
      <AnswerForm />
    </div>
  );
}

const mapStateToProps = state => ({
  answers: state.questions.answers
});

export default connect(
  mapStateToProps,
  { fetchAnswers }
)(Answers);
