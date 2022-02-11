import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>

    <GlobalStyle />
    <BrowserRouter>
      <ToastContainer/>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

