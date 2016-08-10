//business logic
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
}

//UI logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var result = add(parseInt($("#add1").val()), parseInt($("#add2").val()));
    $("#output").text(result);
  });
});
