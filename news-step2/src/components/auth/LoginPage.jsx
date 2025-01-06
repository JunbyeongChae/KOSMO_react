import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const LoginPage = ({ authLogic }) => {
  const navigate = useNavigate()
  const moveNews = (userId) => {
    console.log("move news page");
    //뉴스페이지로 이동
    navigate({pathname: "/news/"+userId})
  }
  //이벤트 핸들러(onClick-대소문자)를 호출 할 때 파라미터에 event객체 자동 주입해줌
  const handleLogin = (event) => {
    console.log('google login')
    //#To-DO - 성공하면 해커뉴스 목록페이지로 이동
    authLogic.login('Google')
    //.then(data => console.log(data.user.uid))
    .then(data => moveNews(data.user.uid))
  }
  useEffect(() => {
    //사용자가 바뀌게 되면 처리하기
    authLogic.onAuthChange(user => {
        //사용자가 있다면 로그인 거치지 않고 바로 NewsPage로 이동하기
        user && moveNews(user.uid)
    })
})
  return (
    <>
      <h2>Login</h2>
      <button onClick={handleLogin}>Google</button>
    </>
  )
}

export default LoginPage;