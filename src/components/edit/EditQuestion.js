import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateQuestion, fetchQuestion, unmountAction } from "../../actions";
import EditForm from "./EditForm";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { UNMOUNT_QUESTION } from "../../actions/types";

//loader style
const Load = styled.div`
  text-align: center;
  margin-top: 50%;
`;

function EditQuestion(props) {
  console.log(props);
  useEffect(() => {
    props.fetchQuestion(props.match.params.id);

    return () => {
      props.unmountAction(UNMOUNT_QUESTION);
    };
  }, []);

  if (!props.singleQuestion) {
    return (
      <Load>
        <Loader type="TailSpin" color="#5887F9" height="100" width="100" />
      </Load>
    );
  }

  return (
    <EditForm
      question={props.singleQuestion}
      updateQuestion={props.updateQuestion}
      history={props.history}
    />
  );
}

const mapStateToProps = state => ({
  singleQuestion: state.questions.singleQuestion
});

export default connect(
  mapStateToProps,
  { updateQuestion, fetchQuestion, unmountAction }
)(EditQuestion);
