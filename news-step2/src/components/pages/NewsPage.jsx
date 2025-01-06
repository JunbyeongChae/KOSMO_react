import React, { useEffect } from 'react'
import NewsHeader from '../include/NewsHeader'
import NewsFooter from '../include/NewsFooter'
import { useNavigate } from 'react-router';

const NewsPage = ({ authLogic }) => {
  //리액트에서는 SPA를 기본으로 함 - href사용 불가
  //href대신에 react-router제공하는 useNavigate 훅 이용
  const navigate = useNavigate()
  //로그아웃 함수 구현하기 - 로그인 성공시 이동하는 페이지 이므로
  const onLogout = () => {
    authLogic.logout();
  };

  //최초 이 페이지가 렌더링 될 때 한번 로그인 상태를 체크하는 onAuthChange 호출
  //로그인상태 체크
  useEffect(() => {
    //사용자가 바뀌게 되면 처리하기
    authLogic.onAuthChange(user => {
      if(!user) {
        navigate('/');
      }
    });
  });
  return (
    <>
      <NewsHeader onLogout={onLogout} />
        <h1>NewsPage</h1>
      <NewsFooter />
    </>
  )
}

export default NewsPage