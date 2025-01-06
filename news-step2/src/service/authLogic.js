import { getAuth,signInWithPopup,GoogleAuthProvider,GithubAuthProvider} from "firebase/auth";
class AuthLogic {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  //로그인 함수 구현
  login(providerName){
    console.log(`providerName : ${providerName}`)//Google or Github
    const authProvider = this.getProvider(providerName)
    return signInWithPopup(this.firebaseAuth, authProvider)
  }
  //로그아웃
  logout() {
    this.firebaseAuth.signOut()
  }
  //로그인 유지 상태를 체크
  onAuthChange(onUserChanged){
    this.firebaseAuth.onAuthStateChanged(user => {
      //사용자가 바뀌면 콜백함수를 받아서 처리
      onUserChanged(user)
    })
  }
  //소셜로그인 회사에 따른 다른 객체 주입
  getProvider(providerName){
    switch (providerName){
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`)
    }
  }
}
export default AuthLogic;