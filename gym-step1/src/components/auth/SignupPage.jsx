import React from 'react'
import { useLocation } from 'react-router';
import GymSignup from './GymSignup';
import Signuptype from './Signuptype';

const SignupPage = () => {
  const location = useLocation();
  //URLSerchParams를 활용하여 쿼리스트링 추출
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");//type의 파라미터값 가져오기
  //http://localhost:3000/login/signup?type=member
  //http://localhost:3000/login/signup?type=teacher
  console.log(type)
  const choicePage = () => {
    if (type) {
      return <GymSignup/>;
    } else {
      return <Signuptype/>;
    }
  }
  return (
    choicePage()
  )
}

export default SignupPage