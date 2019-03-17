import {
  ADD_QUESTION_ATTEMPT,
  ADD_QUESTION_SUCCESS,
  FETCH_QUESTIONS_ATTEMPT,
  FETCH_QUESTIONS_SUCCESS,
  DELETE_QUESTION_SUCCESS,
  FETCH_QUESTION_ATTEMPT,
  FETCH_QUESTION_SUCCESS,
  UNMOUNT_QUESTION,
  FETCH_ANSWERS_SUCCESS,
  FETCH_ANSWERS_ATTEMPT,
  ADD_ANSWER_ATTEMPT,
  ADD_ANSWER_SUCCESS
} from "../actions/types";

const initialStore = {
  questions: [],
  fetchingQs: false,
  addingQ: false,
  singleQuestion: null,
  answers: []
};

export default (state = initialStore, action) => {
  switch (action.type) {
    case ADD_QUESTION_ATTEMPT:
      return { ...state, addingQ: true };
    case ADD_QUESTION_SUCCESS:
      return { ...state, addingQ: false };
    case FETCH_QUESTIONS_ATTEMPT:
      return { ...state, fetchingQs: true };
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload, fetchingQs: false };
    case DELETE_QUESTION_SUCCESS:
      return state;
    case FETCH_QUESTION_ATTEMPT:
      return { ...state, fetchingQs: true };
    case FETCH_QUESTION_SUCCESS:
      return { ...state, fetchingQs: false, singleQuestion: action.payload };
    case UNMOUNT_QUESTION:
      return { ...state, singleQuestion: null };
    case FETCH_ANSWERS_ATTEMPT:
      return { ...state, answers: [] };
    case FETCH_ANSWERS_SUCCESS:
      return { ...state, answers: action.payload };
    case ADD_ANSWER_SUCCESS:
      return { ...state, answers: [...state.answers, action.payload] };
    default:
      return state;
  }
};
