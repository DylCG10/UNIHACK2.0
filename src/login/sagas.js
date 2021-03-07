import { useCallback } from "react";
import { call, takeEvery, put } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';
import { setClient, unsetClient } from '../client/actions';
import { FirebaseContext } from '../firebase';

const browserHistory = createBrowserHistory();


function loginApi(action) {
    //return user profile


    // if (action.hosting)
    //     do firebase hosting room stuff
    // else
    //     do firebase join room stuff
    console.log("api");
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>accessing Firebase...</div>
        }}
    </FirebaseContext.Consumer>
}

function* loginFlow(action) {
    try {
        console.log(action);
        const login = yield call(loginApi, action);

        yield put({ type: LOGIN_SUCCESS });

        yield put(setClient(action.username));

        browserHistory.push('/moviequiz');

    } catch (error) {
        console.log('error');

        yield put({ type: LOGIN_ERROR })
    }
}

function* loginWatcher() {
    yield takeEvery(LOGIN_REQUEST, loginFlow);
}

export default loginWatcher;