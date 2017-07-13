
var items = [
  {name: 'apple', value: 4},
  {name: 'orange', value: 3},
  {name: 'elephant', value: 650}
];

var count = 0;
var first = document.querySelector("#first");
var second = document.querySelector('#second');
var firstDiv = document.querySelector(".first");
var secondDiv = document.querySelector('.second');

first.addEventListener('click', function() {
  if(firstDiv.value < secondDiv.value) {
    count++;
  } else {
    console.log("WRONG");
  }
});

second.addEventListener('click', function() {
  if(firstDiv.value > secondDiv.value) {
    count++;
  } else {
    console.log("WRONG");
  }
});
function rand(first) {
  var i = Math.floor(Math.random()*(items.length));
  if(i == first) {
    rand(first);
  } else {
    return i;
  }
}

function setItems() {
  var i = rand();
  firstDiv.value = items[i].value;
  firstDiv.innerText = items[i].names;
  var j =rand(i);
  secondDiv.value= items[j];
  secondDiv.innertext= items[j].names;
}
console.log (count);
setitems();
