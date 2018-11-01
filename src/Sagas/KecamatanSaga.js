import {FETCHING_DATA_KECAMATAN,FETCHING_DATA_KECAMATAN_SUCCESS,FETCHING_DATA_KECAMATAN_FAILURE }  from '../constants'
import { put,takeLatest,call }  from 'redux-saga/effects'
import { fetchKecamatan } from '../Services/Api'


function* getKecamatan() {
    try {
        let res = yield call(fetchKecamatan)
        console.log('form sagas task' ,res.data)
        yield put({ type:FETCHING_DATA_KECAMATAN_SUCCESS,data : res })
    } catch (error) {
        console.log(error)
        yield put({ type:FETCHING_DATA_KECAMATAN_FAILURE,tasks : [],respon:error })   
    }
}


function* taskKecamatan () {
    yield takeLatest(FETCHING_DATA_KECAMATAN, getKecamatan)
  }
  
export default taskKecamatan