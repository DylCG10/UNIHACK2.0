import { FINAL_QUIZ_REQUEST} from './constants';

const initialState = {
    movies: [],
}

const reducer = function finalQuizReducer(state = initialState, action) {
    switch (action.type) {
        case FINAL_QUIZ_REQUEST:
            return {
                ...state,
                requesting: true,
                successful: false
            }
        // case QUIZ_SUCCESS:
        //     return {
        //         requesting: false,
        //         successful: true
        //     }
        // case QUIZ_ERROR:
        //     return {
        //         requesting: false,
        //         successful: false
        //     }
        default:
            return state;
    }
}

export default reducer;