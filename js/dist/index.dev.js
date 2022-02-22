"use strict";

var imagecount = 0;
var mylist = [];

function addarray() {
  for (var index = 0; index < 4; index++) {
    var sub = [];

    for (var i = 0; i < 4; i++) {
      imagecount++;
      sub.push("images/" + imagecount + ".png");
    }

    mylist.push(sub);
    console.log(mylist);
  }
}

var content = "";
var rand = [];

function getNonRepeatingRndIntegers(min, max) {
  for (var i = 0; i <= max - min; i++) {
    rand[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (var _i = 0; _i <= max - min; _i++) {
    for (var j = 0; j <= max - min; j++) {
      if (_i != j) {
        if (rand[_i] === rand[j]) {
          rand[j] = max + 1;
        }
      }
    }
  }

  for (var _i2 = 0; _i2 <= max - min; _i2++) {
    if (rand[_i2] === max + 1) {
      rand[_i2]--;

      for (var k = 0; k <= max - min; k++) {
        if (k != _i2) {
          if (rand[_i2] === rand[k]) {
            rand[_i2]--;
            k = -1;
          }
        }
      }
    }
  }
}

function addpropertytocss(id) {
  var el = document.querySelectorAll('#site-nav__link-id');

  for (var i = 0; i < el.length; i++) {
    var currentEl = el[i];
    currentEl.style.color = 'white';
  }
}

function createflipcard() {
  // var random = Math.floor(Math.random() * (1 - 4) + 4);
  getNonRepeatingRndIntegers(0, 3);
  console.log(rand[0], rand[1], rand[2], rand[3]);

  try {
    //create game area
    var divflip = document.getElementById("flip");

    for (var index = 0; index < 16; index++) {
      content += "<div id='flip-card" + index + "'  title='flip-card" + index + "'>";

      for (var j = 0; j < 1; j++) {
        content += "<div id='flip-card-inner'>";

        for (var k = 0; k < 1; k++) {
          content += "<div id='flip-card-front'>";
          content += "<img id='image1' src='images/cover.png' style='width:150px;height:150px'/>";
          content += "</div>";
          content += "<div id='flip-card-back'>";

          if (index == 0) {
            content += "<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[0])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 1) {
            content += "<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[1])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 2) {
            content += "<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[2])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 3) {
            content += "<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[3])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 4) {
            content += "<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[0])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 5) {
            content += "<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[1])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 6) {
            content += "<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[2])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 7) {
            content += "<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[3])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 8) {
            content += "<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[0])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 9) {
            content += "<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[1])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 10) {
            content += "<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[2])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 11) {
            content += "<img id='image2' src='/" + mylist[parseInt(0)][parseInt(rand[3])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 12) {
            content += "<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[0])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 13) {
            content += "<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[1])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 14) {
            content += "<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[2])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          }

          if (index == 15) {
            content += "<img id='image2' src='/" + mylist[parseInt(1)][parseInt(rand[3])] + "\' style='width:150px;height:150px'/>";
            content += "</div>";
          } // document.getElementById("flip-card-front").appendChild(image);


          console.log(mylist[parseInt(1)][parseInt(2)]);
        }

        content += "</div>";
      }

      content += "</div>";
      divflip.innerHTML = content;
      console.log(document.getElementById("flip-card" + index).innerHTML.match("flip-card-back"));
    } // delete element
    // var elem = document.getElementById("flip-card0");
    // elem.remove();

  } catch (error) {
    console.error(error);
  }
}

window.onload = function main() {
  setTimeout(function () {
    addarray();
    createflipcard();
    addpropertytocss("#flip-card-back");
  }, 1000);
};