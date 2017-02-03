

function find() {
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

function cost() {
  var findCost = [];
  for ( var count = 0; count < items.length; count++) {
    if (items[count] >= 14 && items[count] <= 18) {
      findItems.push(items[count].price)
  }
}
var betweenItems = 0
for (var i = 0; i < findCost.length; i++) {
  betweenItems += findCost[i]

  x >= 0    &&    x < 0.33
