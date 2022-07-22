import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";
import './index.css';
import App from './App';
import store from './redux/store'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'


// store.dispatch({ type: 'NEW_POST', payload: {id: 101, title: "tét", body: 'tét111'} })
// // log: 'Hi!'
//
// console.log('State after dispatch: ', store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
