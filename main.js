

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
function find() {
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
