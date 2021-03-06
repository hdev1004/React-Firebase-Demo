import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

let database;
const firebaseConfig = {
  apiKey: "AIzaSyA1-ML4JoGkeC0Fe4QnWnGwbV3g3auP0RY",
  authDomain: "usermanage-0210.firebaseapp.com",
  databaseURL: "https://usermanage-0210-default-rtdb.firebaseio.com",
  projectId: "usermanage-0210",
  storageBucket: "usermanage-0210.appspot.com",
  messagingSenderId: "58016895101",
  appId: "1:58016895101:web:6e03de76d08a24cde12114",
  measurementId: "G-12T8XPW5E3"
}; 

export const fire = () => {
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  database = firebase.database()
}

export const getFireDB = () => {
  return database.ref('/').once('value')
}

export const getFireDB_Select = (value) => {
  return database.ref('/' + value).once('value')
}


export const setFireDB = (userID, value) => {
  
  return database.ref('/' + userID).set(value, (error) => {
    if (error) {
      console.log("err!");
      alert("데이터 저장에 실패했습니다.");
      // The write failed...
    } else {
      alert("저장이 완료되었습니다.");
      console.log("Data Save Successfully!");
      // Data saved successfully!
    }
  });
}

export const removeFireDB = (select, userID) => {
  return database.ref('/' + userID).remove((error) => {
    if(error) {
      console.log("update err");
      alert("데이터 삭제에 실패했습니다.");
    } else {
      console.log("Data Remove Successfully!");
    }
  })
}

