import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ActiveAvatarProvider } from "./store/active-avatar";

ReactDOM.render(
  <React.StrictMode>
      <ActiveAvatarProvider>
          <App />
      </ActiveAvatarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
