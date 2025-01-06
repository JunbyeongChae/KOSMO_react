import {
  getAuth,
  GithubAuthProvider, //깃헙으로 로그인할때
  GoogleAuthProvider, //구글에서 제공하는 제공자정보
  signInWithPopup,//구글 로그인 인증 화면 띄움
} from 'firebase/auth';
class AuthLogic {//클래스 선언하기
  constructor() {//생성자함수 - 바닐라에서는 같은 이름함수를 지원하지 않음
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };

} //end of AuthLogic
export default AuthLogic;//index.js에서 참조할 수 있도록 export하였다 - module - ES6

export const onAuthChange = (auth) => {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(user);
    });//end of onAuthStateChanged - 로그인 상태가 풀렸는지 체크하여 콜백함수에 파라미터로 사용자 정보를 쥐어줌
  });//end of Promise
}//end of onAuthChange

export const loginGoogle = (auth, googleProvider) => {
  console.log('loginGoogle호출 성공');
  console.log(googleProvider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)//인증되는 동안에 지연이 발생할 수 있다
    .then((result) => {//내가 구글회원이라면 프로필 정보가 있다
      console.log(result);//object Object - 안보임 - uid, displayName-realname, email
      console.log(JSON.stringify(result));//[object, Object]
      const user = result.user;
      console.log(user.uid)
      resolve(user);
    }).catch((error) => reject(error));
  });
}; //end of loginGoogle

export const logout = (auth) => {
  return new Promise((resolve, reject) => {
    auth.signOut().catch(e =>  reject(alert(e+": 로그아웃 오류입니다.")));
    resolve();
  })
}