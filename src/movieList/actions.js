import { FINAL_QUIZ_REQUEST } from './constants';

export const finalQuizRequest = function finalQuizRequest({ movies}) {
    console.log("REQUEST: ", movies);
    return {
        type: FINAL_QUIZ_REQUEST,
        movies
    }
}
