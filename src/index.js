import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18next';
import { GlobalProvider } from './data/context';


ReactDOM.render(
  <Suspense fallback={<p>Loading...</p>}>
    <GlobalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GlobalProvider>
  </Suspense>,
  document.getElementById('root')
);

