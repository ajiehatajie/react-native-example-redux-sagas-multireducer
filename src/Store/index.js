
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootSaga from '../Sagas/rootSaga'
import Reducer from '../Reducers'

const persistConfig = {
    key:"root",
    storage
  }
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, Reducer)
  

export default function configureStore() {
  
    const store = createStore(persistedReducer,
     composeWithDevTools(applyMiddleware(sagaMiddleware))
     )
    sagaMiddleware.run(rootSaga)
    const persistor = persistStore(store)
     return { store, persistor }
    
  }
