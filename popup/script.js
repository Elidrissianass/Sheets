
/*data write */
function write_db()
{
  var ref = database.ref("charSheets/");
  ref.set(charStats);
}
/* data read */
/* ////////USERS//////// */
let users =
{
  name : "",
  password : "",
  email : "",
  userSheet : ""
}
/* ////////USERS//////// */

/* ////////STATS//////// */
let charStats =
{
  charPoints : {
    strength : "", stamina : "", agility : "", intelligence : "", charm : "", mentalStability : ""
  },
  combat : {
    Archery : "", fistWeapons : "", martialArts : "", longWeapon : "", pointedWeapon : "", sharpWeapon : "", dullWeapon : "", specialWeapon : ""
  },
  physical : {
    balancing : "", climbing : "", running : "", swimming : "", jumping : "", throwing : ""
  },
  socials : { 
    threaten : "", leadership : "", sooth : "", charming : "", haggle : "", lying : "", manipulate : "", humanbehavior : "",convincing : ""
  },

  crafting : {
    bowcrafting : "", brickLaying : "", mechanics : "", smithing : "", technology : "", carpenting : "", drawing : "", cooking : ""
  },
  knowledge : {
    alchemy : "", archeologie : "", biologie : "", botanik : "", ruralknowledge : "", literatur : "", mathematics : "", medicine : "", meteorology : "", physics : "", survival : "", urbaneknowledge : ""
  }
}
function realcharstat(stats)
{
  
}
/* ////////STATS//////// */
let params = {active: true, currentWindow: true}
let Dices =
{
  d20 : "/roll d20",
  d100: "/roll d100"
}

// auto generate STATS
window.onload = function ()
{
  var ref = database.ref("charSheets/");
  ref.on("value", realcharstat);
  function realcharstat(stats)
  {
    var charsheet = stats.val();
    var counter = Object.keys(charsheet).length;
    for (var i=0; i < counter; i++)
    {
      var key1 = Object.keys(charsheet)[i];
      var counter2 = Object.keys(charsheet[key1]).length;
      // li the character section
      var charSection = document.createElement('li',key1);
      charSection.setAttribute('class' , 'char-section');
      charSection.innerHTML = key1+ " :";
      var ol = document.getElementById('charSheet');
      ol.appendChild(charSection);
      
      for (var j=0;j < counter2;j++)
      {
        var key2 = Object.keys(charsheet[key1])[j];
        var value = Object.values(charsheet[key1])[j];
        // li the character skills
        var li = document.createElement('li',key1);
        li.setAttribute('class' , 'char-skill');
        li.innerHTML = key2+ " :";
        var ol = document.getElementById('charSheet');
        ol.appendChild(li);
        // input the character value
        var input = document.createElement('input',key1);
        input.setAttribute('class' , 'char-value');
        input.setAttribute('type' , 'number');
        if(value === "")
        {input.value = 0;}
        else{input.value = value;}
        ol.appendChild(input);
      }
    }

  }

  // var counter = Object.keys(charStats).length;
  // for (var i=0;i < counter;i++)
  // {
  //   var key1 = Object.keys(charStats)[i];
  //   var counter2 = Object.keys(charStats[key1]).length;
  //   // li the character section
  //   var charSection = document.createElement('li',key1);
  //   charSection.innerHTML = key1+ " :";
  //   charSection.setAttribute('class' , 'char-section');
  //   var ol = document.getElementById('charSheet');
  //   ol.appendChild(charSection);
  //   for (var j=0;j < counter2;j++)
  //   {
  //     var key2 = Object.keys(charStats[key1])[j];
  //     // li the character skills
  //     var li = document.createElement('li',key1);
  //     li.innerHTML = key2+ " :";
  //     li.setAttribute('class' , 'char-skill');
  //     var ol = document.getElementById('charSheet');
  //     ol.appendChild(li);
  //     // input the character value
  //     var input = document.createElement('input',key1)
  //     input.value = 8;
  //     input.setAttribute('class' , 'char-value');
  //     input.setAttribute('type' , 'number');
  //     ol.appendChild(input);
  //   }
  // }
} 

// var li = document.createElement('li',Stats);
// li.parentElement('charStat');
// firebase connection
var firebaseConfig = {
  apiKey: "AIzaSyBtJr_5Vh8G2Lut3jRl81dLuPhoWXPvv94",
  authDomain: "sheets-23cd8.firebaseapp.com",
  databaseURL: "https://sheets-23cd8.firebaseio.com",
  projectId: "sheets-23cd8",
  storageBucket: "sheets-23cd8.appspot.com",
  messagingSenderId: "737440245904",
  appId: "1:737440245904:web:4b041429c0cca413ac9015"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//database.ref("users/Shahinaz").set(Dices);
//Change any Stat the GM wants
// function editStat(username, Stat) {
//   firebase.database().ref('users/' + username).set({
//     dbstat: Stat
//   });
// }
/* Sends a Dice Roll in the textarea */
document.getElementById("send").onclick = function() {writeData()};
function writeData() 
{
  chrome.tabs.query(params, gotTabs);
  function gotTabs(tabs)
  {chrome.tabs.sendMessage(tabs[0].id,Dices.d20);}
}