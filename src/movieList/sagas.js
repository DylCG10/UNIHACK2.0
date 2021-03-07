import { useCallback } from "react";
import { call, takeEvery, put } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';

import { FINAL_QUIZ_REQUEST, QUIZ_SUCCESS, QUIZ_ERROR } from './constants';
import { setClient, unsetClient } from '../client/actions';

import { readString } from 'react-papaparse'


function finalQuizSubmitApi(action) {
    console.log("RECOMMENDED MOVIES: ", action.movies);

}

function* finalQuizFlow(action) {
    try {
        // console.log("finalquizflow");
        const res = yield call(finalQuizSubmitApi, action);

        // yield put({ type: QUIZ_SUCCESS})

        //yield put setFinalMovies();
    } catch (error) {
        console.log('error: ', error);
    }
}

function* finalQuizWatcher() {
    // console.log('watch')
    yield takeEvery(FINAL_QUIZ_REQUEST, finalQuizFlow);
}

export default finalQuizWatcher;