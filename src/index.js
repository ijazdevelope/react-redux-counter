import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MyContext from './components/MyContext';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';

ReactDOM.render(
  <Provider store={Store}>
    <MyContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContext>
  </Provider>,
  document.getElementById('root')
);
