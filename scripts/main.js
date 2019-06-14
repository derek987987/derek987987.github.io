var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
/*myHeading.textContent = "Hello world!";

alert(multiply(5,5));

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
*/

myButton.onclick = function() {
  setUserName();
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/HEART.jpg') {
      myImage.setAttribute ('src','images/Curlingrock_small.jpg');
    } else {
      myImage.setAttribute ('src','images/Stonehenge.jpg');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
