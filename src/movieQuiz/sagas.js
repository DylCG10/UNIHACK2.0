import { useCallback } from "react";
import { call, takeEvery, put } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';

import { QUIZ_REQUEST, QUIZ_SUCCESS, QUIZ_ERROR } from './constants';
import { setClient, unsetClient } from '../client/actions';

import { readString } from 'react-papaparse'

const browserHistory = createBrowserHistory();

const config = {
    delimiter: "",  // auto-detect
    newline: "",  // auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: false,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    download: false,
    downloadRequestHeaders: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    // delimitersToGuess: [',', '	', '|', ';', RECORD_SEP, UNIT_SEP]
  }

function quizSubmitApi(action) {

    console.log("do some stuff");

    //get vectors for each movie
    //average out the vectors
    //
    // const results = readString("../new.csv", config);

    // const file = require('../new.csv');

    // const reader = new FileReader();
    // reader.readAsText(file);

    // reader.onload = function(event) {

    //     //get the file.
    //     const csv = event.target.result;
    
    //     //split and get the rows in an array
    //     const rows = csv.split('\n');
    
    //     //move line by line
    //     for (var i = 1; i < rows.length; i++) {
    //       //split by separator (,) and get the columns
    //       const cols = rows[i].split(',');
    
    //       //move column by column
    //       for (var j = 0; j < cols.length; j++) {
    //         /*the value of the current column.
    //         Do whatever you want with the value*/
    //           const value = cols[j];
    //           console.log("VALUE: ", value);
    //       }
    //     }
    //   }

    const averaged_vectors = [0, 0, 1, 1, 3, 4, 0];

    browserHistory.push("/movieList");

}

function* quizFlow(action) {
    try {
        // console.log("quizflow");
        const res = yield call(quizSubmitApi, action);

        yield put({ type: QUIZ_SUCCESS})

        //yield put setFinalMovies();
    } catch (error) {
        console.log('error: ', error);
    }
}

function* quizWatcher() {
    // console.log('watch')
    yield takeEvery(QUIZ_REQUEST, quizFlow);
}

export default quizWatcher;