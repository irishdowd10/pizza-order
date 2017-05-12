//BUSSINESS LOGIC - BACKEND
function Cup (garnishes,size,quanity) {
  this.garnishes = garnishes;
  this.size = size;
  this.quantity = quantity;
};

Cup.prototype.cupPrice = function () {
  var cost = 0;

  for (i = 1; i <=this.garnishes.length; i++) {
    cost +=1.5;
  }
  if (this.size ==="small") {
    cost += 8;
  } else if (this.size === "medium") {
    cost +=11;
  } else if (this.size === "large") {
    cost +=15;
  }
  return cost * this.quantity;
  console.log(cost);
};

//USER LOGIC - FRONTEND

$("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var inputs = $('#contactForm :input');
