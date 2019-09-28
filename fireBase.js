var app_fireBase = {};
(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDtUv0d9ePNGIZpvhCg2mDplG6SzcVj2bI",
    authDomain: "scftrial1.firebaseapp.com",
    databaseURL: "https://scftrial1.firebaseio.com",
    projectId: "scftrial1",
    storageBucket: "",
    messagingSenderId: "756915675915",
    appId: "1:756915675915:web:7655e35574b41b81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_fireBase = firebase;
})()

function save_data() {
  if (typeof (Storage) !== "undefined") {
    // Store
    localStorage.setItem("nickName", document.getElementById('user_nickname').value);
    localStorage.setItem("age", document.getElementById('user_age').value);
    localStorage.setItem("gender", document.getElementById('user_gender').value);
    // window.location.href = "index.html";
    // Retrieve
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  //window.alert("The user is created successfully!");
  //window.location.href = "index.html";
  //console.log("hhellllo");
}

function submitform() {
  var f = document.getElementsByTagName('form')[0];
  if (f.checkValidity()) {
    console.log("test1");
    window.location.href = "quiz.html";
    f.submit();
    save_data();
    window.location.href = "quiz.html";
  } else {
    alert("Please fill out all the fields. Remember your email field must include an '@' symbol");

  }
}

function print_data() {
  var databaseRef = firebase.database().ref('users/');
  var container = document.getElementById("user_list");

  databaseRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

      var user_card = document.createElement("div");
      container.appendChild(user_card);
      user_card.className = "user_card";
      user_card.addEventListener("click", function () { sendToArduino(childData.user_scentArray); });

      var firstNode = document.createElement("h1");
      var holderName = childData.user_first;
      if (holderName == undefined) {
        holderName = childData.user_nickname;
        if (holderName == undefined) {
          holderName = "John";
        }
      }
      firstNode.innerHTML = holderName;
      user_card.appendChild(firstNode);

      var lastNode = document.createElement("h2");
      holderName = childData.user_last;
      if (holderName == undefined) {
        holderName = childData.user_number;
        if (holderName == undefined) {
          holderName = "Doe";
        }
      }
      lastNode.innerHTML = holderName;
      user_card.appendChild(lastNode);
    });
  });
}


function sendToArduino(scent) {
  alert("Floral: " + scent[0] +
    "\nWarm/Spicy: " + scent[1] +
    "\nWoodsy: " + scent[2] +
    "\nFresh: " + scent[3]);
}
