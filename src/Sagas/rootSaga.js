import { all, fork } from "redux-saga/effects";

import * as TaskSaga from './TaskSaga'
import * as KecamatanSaga from './KecamatanSaga'

export default function* rootSaga() {
    yield all(
      [...Object.values(TaskSaga), 
       ...Object.values(KecamatanSaga)
      ].map(fork)
    );
  }
