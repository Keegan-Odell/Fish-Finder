import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCatchObject(action) {
	try {
		yield put({
			type: 'SET_SOMETHING',
		});
	} catch {
		console.log('error');
	}
}

function* createNewCatch(action) {
	try {
		yield axios.post('/api/catch', action.payload);
	} catch {
		console.error('error on createNewCatch');
	}
}

function* fetchCatches() {
	try {
		const response = yield axios.get('/api/catch');
		yield put({ type: 'SET_CATCHES', payload: response.data });
	} catch {
		console.log('catch get request failed');
	}
}

function* catchObjectSaga() {
	yield takeLatest('GET_CATCH_OBJECT', getCatchObject);
	yield takeLatest('CREATE_NEW_CATCH', createNewCatch);
	yield takeLatest('FETCH_CATCHES', fetchCatches);
}

export default catchObjectSaga;
