import { Route, Routes } from "react-router";
import LoginPage from "./components/auth/LoginPage";
import NewsPage from "./components/pages/NewsPage";
import YoutubePage from "./components/pages/YoutubePage";
import NoticePage from "./components/pages/NoticePage";

const NewsApp = ({ authLogic }) => {
  console.log(authLogic);
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<LoginPage authLogic={authLogic} />} />
        <Route path="/news/:userId" exact={true} element={<NewsPage authLogic={authLogic} />} />
        <Route path="/youtube" exact={true} element={<YoutubePage />} />
        <Route path="/notice" exact={true} element={<NoticePage />} />
      </Routes>
    </>
  );
};

export default NewsApp;
