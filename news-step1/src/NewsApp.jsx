import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import NewsList from "./components/NewsList";

const NewsApp = () => {
  //뉴스목록을 담을 배열객체 선언
  const [newsList, setNewsList] = useState([]);
  const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
  //useEffect훅을 사용 - 함수이다(hook)
  //특이점은 파라미터로 의존성배열을 지원받음(렌더링과 밀접한 관계-***중요***)
  useEffect(() => {
    //axios를 사용하면 비동기 처리 가능
    axios.get(NEWS_URL).then((res) => {
      console.log(res.data);
      setNewsList(res.data);
    });
  }, []); //의존성배열 추가-만일 빈 배열이면 단 한번만 실행
  console.log(3);
  console.log(newsList.length);
  return (
    <>
      <ul>
        {Object.keys(newsList).map((key) => {
          return (
            <li key={key}>
              [id : {newsList[key].id}] /user : {newsList[key].user}
              /components_count : {newsList[key].components_count}
              /time_ago : {newsList[key].time_ago}
              /url : <a href={newsList[key].url}>{newsList[key].url}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NewsApp;
