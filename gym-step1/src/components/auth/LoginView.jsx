import React, { useState } from "react";
import { DividerDiv, DividerHr, DividerSpan, GoogleButton, LoginForm, MyH1, MyInput, MyLabel, MyP, PwEye, SubmitButton } from "../style/FormStyle";
import { Link } from "react-router";

const LoginView = () => {
  // 사용자 입력 상태
  const [tempUser, setTempUser] = useState({
    mem_email: "",
    mem_password: "" 
  });

  // 입력값 변경 핸들러
  const changeUser = (e) => {
    const id = e.currentTarget.id;
    const value = e.target.value;
    setTempUser({ ...tempUser, [id]: value });
  }

  // 비밀번호 보기/숨기기 상태
  //동일한 input type=text인 경우에는 입력한 값을 노출하고, 비번일 때는 히든처리해야 함.
  const [passwordType, setPasswordType] = useState({
    type: "password", 
    visible: false 
  });
  const passwordView = (e) => {
    const id = e.currentTarget.id;
    if (id === "password") {
      if (!passwordType.visible) {
        // <input type="text"/>
        setPasswordType({ ...passwordType, type: "text", visible: true });
      } else {
        // <input type="password"/>
        setPasswordType({ ...passwordType, type: "password", visible: false });
      }
    }
  }
  // 버튼 상태 및 색상
  const [submitBtn, setSubmitBtn] = useState({
    disabled: false, 
    bgColor: "#007BFF",
})
  
  // 버튼 Hover 이벤트 핸들러
  const toggleHover = () => {
    setSubmitBtn((prev) => ({
      ...prev,
      bgColor: prev.bgColor === "#007BFF" ? "#0056b3" : "#007BFF",
    }));
  };

  // 로그인 함수
  const loginE = () => {
  };

  // Google 로그인 함수
  const loginG = () => {
  };
  return (
    <>
      <LoginForm>
        <MyH1>로그인</MyH1>
        <MyLabel htmlFor="email">
          {" "}
          이메일
          <MyInput type="email" id="email" name="mem_email" placeholder="이메일를 입력해주세요." onChange={(e) => changeUser(e)}/>
        </MyLabel>
        <MyLabel htmlFor="password">
          {" "}비밀번호
          <MyInput type={passwordType.type} autoComplete="off" id="password" name="mem_password" placeholder="비밀번호를 입력해주세요." onChange={(e) => changeUser(e)}/>
          <div id="password" onClick={(e) => { passwordView(e); }} style={{ color: `${passwordType.visible ? "gray" : "lightgray"}` }}>
            <PwEye className="fa fa-eye fa-lg"></PwEye>
          </div>
        </MyLabel>
        <SubmitButton type="button" disabled={submitBtn.disabled} style={{ backgroundColor: submitBtn.bgColor }} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={() => { loginE(); }}>
          로그인
        </SubmitButton>
        <DividerDiv>
          <DividerHr />
          <DividerSpan>또는</DividerSpan>
        </DividerDiv>
        <GoogleButton type="button" onClick={() => { loginG(); }}>
          <i className="fab fa-google-plus-g" style={{ color: "red", fontSize: "18px" }}></i>
          &nbsp;&nbsp;Google 로그인
        </GoogleButton>
        <MyP style={{ marginTop: "30px" }}>
          신규 사용자이신가요?&nbsp;
          <Link to="/login/signup" className="text-decoration-none" style={{ color: "blue" }}>
            계정 만들기
          </Link>
        </MyP>
        <MyP>
          이메일를 잊으셨나요?&nbsp;
          <Link to="/login/findEmail" className="text-decoration-none" style={{ color: "blue" }}>
            이메일 찾기
          </Link>
        </MyP>
        <MyP>
          비밀번호를 잊으셨나요?&nbsp;
          <Link to="/login/resetPwd" className="text-decoration-none" style={{ color: "blue" }}>
            비밀번호 변경
          </Link>
        </MyP>
      </LoginForm>
    </>
  );
};

export default LoginView;
