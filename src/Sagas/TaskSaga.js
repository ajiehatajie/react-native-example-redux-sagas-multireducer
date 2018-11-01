import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE }  from '../constants'
import { put,takeLatest,call }  from 'redux-saga/effects'
import { fetchTask } from '../Services/Api'


function* getTask() {
    try {
        let res = yield call(fetchTask)
        console.log('form sagas task' ,res.data)
        yield put({ type:FETCHING_DATA_SUCCESS,data : res })
    } catch (error) {
        console.log(error)
        yield put({ type:FETCHING_DATA_FAILURE,tasks : [],respon:error })   
    }
}


function* taskSaga () {
    yield takeLatest(FETCHING_DATA, getTask)
  }
  
export default taskSaga
