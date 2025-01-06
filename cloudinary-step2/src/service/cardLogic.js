import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
class CardLogic {
  constructor(app) {
    this.db = getDatabase(app);
  }
  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
  //https://firebase.google.com/docs/database/web/read-and-write?authuser=0
  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card)
      .then(() => {
        console.log("저장성공");
      })
      .catch((error) => {
        console.log("저장 실패!!!");
      });
  }
  //데이터 삭제 - 해당 데이터 위치의 참조에 remove()를 호출한다
  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`)); //new Date().now() 오늘날짜시간 10진수값이 담김
  }
}

export default CardLogic;
