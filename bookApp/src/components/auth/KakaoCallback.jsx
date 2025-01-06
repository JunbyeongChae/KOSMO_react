import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate , useLocation } from "react-router";

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const code = new URLSearchParams(location.search).get("code");
  console.log(code);
  useEffect(() => {
    const asyncAuth = async () => {
      try {
        const res1 = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          null,
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params: {
              grant_type: "authorization_code",
              client_id: "44927bb1261fe44bf6b58ca626be6a3b",
              redirect_uri: "http://localhost:3000/auth/kakao/callback",
              code: code,
            },
          }
        );
        const accessToken = res1.data.access_token;
        console.log("accessToken :" + accessToken);
        const res2 = await axios.post(
          "https://kapi.kakao.com/v2/user/me",
          null,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        console.log("토큰가져오기 성공", res2.data);
        localStorage.setItem("nickname", res2.data.properties.nickname);
        navigate("/");
      } catch (error) {
        console.error(
          "토큰가져오기 실패",
          error.res1 ? error.res1.data : error.message
        );
      }
    };
    asyncAuth();
  });
  return(
  <div>KakaoCallback</div>
  )
};

export default KakaoCallback;
