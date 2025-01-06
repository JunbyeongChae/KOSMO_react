//rafce 단축명령어 사용
import React from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";

const LoginPage = () => {
  const kakaoUrl = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=44927bb1261fe44bf6b58ca626be6a3b&redirect_uri=http://localhost:3000/auth/kakao/callback';
  const handleKakaoLogin = (event) => {
    event.preventDefault();
    try{
      window.location.href = kakaoUrl
    }catch(error){
      console.error("인등코드 받기 실패", error)
    }
  };
  return (
    <>
      <Header />
      <div className="row my-5 justify-content-center">
        <div className="col-8 col-md-6 col-lg-4">
          <h3 className="text-center mb-5">로그인</h3>
          <form name="frm" method="post">
            <div className="input-group my-2">
              <div className="input-group-text">이 메 일</div>
              <input
                className="form-control"
                id="email"
                name="email"
                defaultValue="tomato@hot.com"
              />
            </div>
            <div className="input-group">
              <div className="input-group-text">비밀번호</div>
              <input
                className="form-control"
                name="password"
                type="password"
                defaultValue="12345678"
              />
            </div>
            <div className="my-3">
              <button className="btn btn-success w-100">로그인</button>
            </div>
            <div className="text-end mt-3">
              <a href="/users/join">회원가입</a>
            </div>
          </form>
          <div className="my-3">
            <button
              onClick={handleKakaoLogin}
              className="btn btn-success w-100"
              style={{ border: "none", outline: "none", backgroundColor: "#FEE500" }}
            >
              <img
                src="/images/kakao/ko/kakao_login_medium_narrow.png"
                alt="카카오로그인"
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
