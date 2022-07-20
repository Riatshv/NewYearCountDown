import React from 'react';
import ReactDOM from 'react-dom/client';
import { TimerPage } from './page/TimerPage/TimerPage';
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <TimerPage></TimerPage>
);
