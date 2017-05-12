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

};

//USER LOGIC - FRONTEND

$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();

    var size = $("select#cup-size").val();
    var garnishes = [];
    var quanity = $("#quanity").val();

    $("input:checkbox[name=cup-garnish]:checked").each(function(){
      garnishes.push($(this).val())
    });

    var newCup = new Cup(garnishes, size, quantity);
    var cupTotal = newCup.cupPrice();

    $("#pizza-orders").show().append("hello");
    // $('#receipt-greeting').append("hello you");

  });
    console.log(cupTotal);
});
