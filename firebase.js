
var firebaseConfig = {
  apiKey: "AIzaSyBW3iiLq5RilhJmsT2Go5lVUD03teNp8Zw",
  authDomain: "sheets-a6a5f.firebaseapp.com",
  databaseURL: "https://sheets-a6a5f.firebaseio.com",
  projectId: "sheets-a6a5f",
  storageBucket: "sheets-a6a5f.appspot.com",
  messagingSenderId: "967904009351",
  appId: "1:967904009351:web:7ac7d8dc9d35a160c76c22"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("writedate").onclick = function() {writeData()};

function writeData() 
{
    
    firebase.database().ref("CharUser").set({

      user: document.getElementById("user").innerHTML,
      strength: document.getElementById("number").value,
      intelligence: document.getElementById("number").value

    });
}