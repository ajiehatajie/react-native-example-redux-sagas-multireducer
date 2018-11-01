import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './Store/index'
import { PersistGate } from 'redux-persist/integration/react'
import CreateSwitchNavigator from './Navigation/Navigate'
 
const { store, persistor } = configureStore()

export class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
           <PersistGate loading={null} persistor={persistor}>
                <CreateSwitchNavigator/>
           </PersistGate>
        </Provider>
    )
  }
}

export default App;