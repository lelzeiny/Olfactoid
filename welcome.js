var canvas = document.getElementsByClassName("myCanvas")[0];
var ctx = canvas.getContext("2d");
var wWidth;
var wHeight;
var totalStars = 300;
var star = [];

function render() {
  //console.log("RESIZE");
  wWidth = window.innerWidth;
  wHeight = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', render);
  ctx.fillStyle = "white";

  for (var i = 0; i < totalStars; i++) {
    star[i] = {
      yPos: Math.random() * wHeight,
      xPos: Math.random() * wWidth,
      radius: Math.random() * (6),
      xVelocity: Math.random() * (0.4) + 0.1
    }
    ctx.beginPath();
    ctx.arc(star[i].xPos, star[i].yPos, star[i].radius, 6.3, false);
    ctx.fill();
  }
}
render();

var cometStar = [];
var cometCounter = 0;
function Comet() {
  var xMouse = window.event.x + document.body.scrollLeft - 2;
  var yMouse = window.event.y + document.body.scrollTop - 2;
  for (var i = 0; i < 1; i++) {
    var xTemp = xMouse + Math.random() * 50 - 25;
    var yTemp = yMouse + Math.random() * 80 - 40;
    cometStar[cometCounter] = {
      xPos: xTemp,
      yPos: yTemp,
      radius: 40 / Math.sqrt(Math.pow((yMouse - yTemp), 2) + Math.pow((xMouse - xTemp), 2)) + 2
    }
    if (cometStar[cometCounter].radius > 15) {
      cometStar[cometCounter].radius = 8;
    }
    ctx.beginPath();
    ctx.arc(cometStar[cometCounter].xPos, cometStar[cometCounter].yPos, cometStar[cometCounter].radius, 6.3, false);
    ctx.fill();
    cometCounter++;
  }
}

function animateStars() {
  //clears canvas
  ctx.clearRect(0, 0, wWidth, wHeight);

  for (var i = 0; i < totalStars; i++) {
    //redraws orbit stars
    star[i].xPos -= star[i].xVelocity;
    if (star[i].xPos < 0) {
      star[i].xPos = wWidth;
    }
    ctx.beginPath();
    ctx.arc(star[i].xPos, star[i].yPos, star[i].radius, 6.3, false);
    ctx.fill();
  }
  for (var i = 0; i < cometStar.length; i++) {
    //redraws mouseover stars
    cometStar[i].radius -= 0.1;
    if (cometStar[i].radius > 0) {
      ctx.beginPath();
      ctx.arc(cometStar[i].xPos, cometStar[i].yPos, cometStar[i].radius, 6.3, false);
      ctx.fill();
    }
  }
}
window.setInterval(animateStars, 20);
var databaseRef = firebase.database().ref('users/');
var database = firebase.database();

/*databaseRef.once('value', function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
              // ...
              var row = tblUsersList.insertRow(rowIndex);
              var cellId = row.insertCell(0);
              var cellName = row.insertCell(1);
              cellId.appendChild(document.createTextNode(childKey));
              cellName.appendChild(document.createTextNode(childData.user_name));

              rowIndex = rowIndex + 1;
            });
});
*/

/*
function reload_page() {

  window.location.reload();

}
*/
