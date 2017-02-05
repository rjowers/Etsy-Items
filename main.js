

function avgPrice() {
  var findItems = [];
  for ( var count = 0; count < items.length; count++) {
    if (items[count] !== 0) {
      findItems.push(items[count].price)
  }
}
var avg = 0;
for (var i = 0; i < findItems.length; i++) {
  avg += findItems[i] / findItems.length
}
  return "The average price is " + avg.toFixed(2)
};

var Answer1 = document.getElementById("answer1");
answer1.innerHTML = avgPrice(items);


//Question 2
var allItems = [];

function between() {
  var findItems = [];
  for ( var count = 0; count < items.length; count++) {
    if (items[count] !== 0) {
      findItems.push(items[count].price)
  }
}
var betweenItems = [];
for (var i = 0; i < findItems.length; i++) {
  if (findItems[i] > 14 && findItems[i] < 18){
    betweenItems.push(items[i].title)

  }
}return betweenItems;
}

var Answer2 = document.getElementById("answer2");
answer2.innerHTML = "<li>" + between(items)[0] + "</li>" + "<li>" + between(items)[1] + "</li>" + "<li>" + between(items)[2] + "</li>";



//Question 3

function findGBP() {
  var findItems = [];
  for ( var count = 0; count < items.length; count++) {
    if (items[count].currency_code === "GBP") {
      findItems.push(items[count].title);
        findItems.push(items[count].price);
  }
} return findItems;
}

var Answer3 = document.getElementById("answer3");
answer3.innerHTML = findGBP(items);





//Question 4

function findWood() {
  var findItems = [];
  for ( var count = 0; count < items.length; count++) {
    if (items[count].materials.includes("wood")) {
      findItems.push(items[count].title);
  }
} return findItems;
}

var Answer4 = document.getElementById("answer4");
answer4.innerHTML =
"<li>" + findWood(items)[0] + "</li>" + "<li>" + findWood(items)[1] + "</li>" + "<li>" + findWood(items)[2] + "</li>"
+ "<li>" + findWood(items)[3] + "</li>" + "<li>" + findWood(items)[4] + "</li>" ;


//Question 5


var mat =[];
function eight() {
  var findM = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].materials.length >= 8) {
      // findM.push(items[i].title);
       answer5.innerHTML = items[i].title + " has" + items[i].materials.length + " materials:";
  }
}
var allMaterials = []
  for (var count = 0; count < items[i].materials[count].length; count++) {
      answer5.innerHTML = + items[i].materials[count];
    }
  }

var Answer5 = document.getElementById("answer5");
//answer5.innerHTML = eight(items);












//Question 6

function findSellers() {
  var findItems = [];
  for ( var count = 0; count < items.length; count++) {
    if (items[count].who_made.includes("i_did")) {
      findItems.push(items[count].title);
  }
} return findItems.length + " were made by their sellers";
}

var Answer6 = document.getElementById("answer6");
answer6.innerHTML = findSellers(items);
