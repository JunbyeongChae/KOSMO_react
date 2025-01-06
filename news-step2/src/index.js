import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsApp from './NewsApp';
import { BrowserRouter } from 'react-router';
import AuthLogic from './service/authLogic';
import app from './service/firebase';

const authLogic = new AuthLogic(app);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <BrowserRouter>
      <NewsApp authLogic={authLogic} />
    </BrowserRouter>
  </>
);
