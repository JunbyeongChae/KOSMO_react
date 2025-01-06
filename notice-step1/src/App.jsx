import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/auth/LoginPage";
import NoticeDetail from "./components/notice/NoticeDetail";
import NoticeList from "./components/notice/NoticeList";
import NoticeTestDetail from "./components/noticeTest/NoticeTestDetail";
import NoticeTestList from "./components/noticeTest/NoticeTestList";

const App = () => {
  return (
    <>
      {/* fragment 생략 가능 */}
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login" exact={true} element={<LoginPage />} />
        <Route path="/notice" exact={true} element={<NoticeList />} />
        <Route path="/notice/:n_no" exact={true} element={<NoticeDetail />} />
        <Route path="/noticeT" exact={true} element={<NoticeTestList />} />
        <Route path="/noticeTD" exact={true} element={<NoticeTestDetail />} />
      </Routes>
    </>
  );
};

export default App;
/*
http://localhost:3000 뒤에 /index.html생략됨
- <div id="root"></div>
- root에 대한 정보는 index.js에서 참조함
  document.querySelector('#root')
- index.js에서 App을 import한다
- App.js의 render에 있는 태그가 출력
- 그런데 이번에는 App.jsx에 메뉴를 클릭했을 때 보여줄 페이지에대한 링크를 걸어준다.
*/
