import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ReactLenis root> */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    {/* </ReactLenis> */}
  </React.StrictMode>
);
