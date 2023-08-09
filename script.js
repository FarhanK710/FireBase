const firebaseConfig = {
  apiKey: "",
  authDomain: "projectfire-f5280.firebaseapp.com",
  projectId: "projectfire-f5280",
  storageBucket: "projectfire-f5280.appspot.com",
  messagingSenderId: "764663567161",
  appId: "1:764663567161:web:f4f86649725c7c53ab8ee8",
  measurementId: "G-HKG9D0FX3D"
};
 firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
 //var dataRef = database.ref();


let titles = document.getElementById("title");
let infos = document.getElementById("info");
let names = document.getElementById("name");



let button = document.querySelector("button");

button.addEventListener("click", infoAdd);



function infoAdd(e){
  e.preventDefault();
  const newData = {
      name: names.value,
      info: infos.value,
      title: titles.value,
    }
    database.collection("users").add(newData)
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
}



const usersCollection = database.collection("users");
const querySnapshot = usersCollection.get()
.then(function(querySnapshot) {
for (let i = 0; i < querySnapshot.docs.length; i++) {
  const doc = querySnapshot.docs[i];
  console.log("Document ID: ", doc.id);
  console.log("Document data: ", doc.data());
}
})
.catch(function(error) {
console.error("Error getting documents: ", error);
});

