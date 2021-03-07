import { QUIZ_REQUEST } from './constants';

export const quizRequest = function quizRequest({ movies}) {
    console.log("REQUEST: ", movies);
    return {
        type: QUIZ_REQUEST,
        movies
    }
}
