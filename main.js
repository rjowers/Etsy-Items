

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


//Question 2
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





//Question 4

function findWood() {
  var findItems = [];
  for ( var count = 0; count < items.length; count++) {
    if (items[count].materials.includes("wood")) {
      findItems.push(items[count].title);
  }
} return findItems;
}









//Question 6

function findSellers() {
  var findItems = [];
  for ( var count = 0; count < items.length; count++) {
    if (items[count].who_made.includes("i_did")) {
      findItems.push(items[count].title);
  }
} return findItems.length + " were made by their sellers";
}
