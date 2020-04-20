import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Increments from './components/Increment';

function App(){
  return(
    <Provider store={store}>
      <Increments/>
    </Provider>
  )
}

export default App;
