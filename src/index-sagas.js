import { all } from 'redux-saga/effects';
import LoginSaga from './login/sagas.js';
import QuizSaga from './movieQuiz/sagas.js';
import FinalQuizSaga from './movieList/sagas.js';

export default function* IndexSagas() {
    yield all([
        LoginSaga(),
        QuizSaga(),
        FinalQuizSaga()
    ]);
}