import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import stopwatchSlice from './Projects/Sudoko/features/stopwatchSlice';
import messageSlice from './Projects/Sudoko/features/messageSlice';
import tableSlice from './Projects/Sudoko/features/tableSlice';

import { IconContext } from "react-icons";

const store = configureStore({
    reducer: {
        stopwatch: stopwatchSlice,
        messages: messageSlice,
        table: tableSlice
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <IconContext.Provider value={{ className: 'react-icons', style: { marginBottom: '5px' } }}>
          <App />
        </IconContext.Provider>
      </BrowserRouter>
    </Provider> 
  </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
