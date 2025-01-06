export const logout = (auth) => {
  console.log("로그아웃")
  return new Promise((resolve,reject) => {
    auth.signOut().catch((e) => reject(alert(e+"logout error")));
    localStorage.removeItem("email");
    resolve()
  });
};