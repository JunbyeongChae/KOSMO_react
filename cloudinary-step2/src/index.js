import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthLogic from './service/authLogic';
import { app } from './service/firebase';
import ImageUploader from './service/image_upload';
import ImageFileInput from './components/common/ImageFileInput';
import CardLogic from './service/cardLogic';
const authLogic = new AuthLogic(app);
//firebase Realtime Database를 활용하기 위해 공통코드 생성하기
const cardLogic = new CardLogic(app)
const imageUploader = new ImageUploader();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
)
//console.log(app);
//console.log(authLogic);
//public>index.html div의 위치 파악함
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <>
    <BrowserRouter>
    {/* 리액트에서 사용자정의 태그는 일급함수이다 */}
      <App FileInput={FileInput} authLogic={authLogic} cardLogic={cardLogic} />
    </BrowserRouter>
  </>
);
