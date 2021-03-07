import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import login from './login/reducer';
import client from './client/reducer';
import quiz from './movieQuiz/reducer';
import finalQuiz from './movieList/reducer';

const IndexReducer = combineReducers({
    login,
    client,
    quiz,
    finalQuiz
});

export default IndexReducer;