import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsApp from './NewsApp';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <>
    <NewsApp />
  </>
);
