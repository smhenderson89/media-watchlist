import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
// Bringing in the GoogleOAuthProvider from the package
import { GoogleOAuthProvider } from '@react-oauth/google';
const googleClientID = "985882105140-jtgblav8m9ncbn7e2qberqqp7po9hedv.apps.googleusercontent.com"

// creating store
const store = createStore(
  //root reducer coming from reducers folder
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    {/* wrapping provider in entire app component*/}
    <Provider store={store}>
    {/* Long favicon url, works but can be placed in variable */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);