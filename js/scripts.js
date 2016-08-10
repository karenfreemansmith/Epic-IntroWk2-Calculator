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
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var result = subtract(parseInt($("#sub1").val()), parseInt($("#sub2").val()));
    $("#output").text(result);
  });
  $("form#mul").submit(function(event) {
    event.preventDefault();
    var result = multiply(parseInt($("#mul1").val()), parseInt($("#mul2").val()));
    $("#output").text(result);
  });
  $("form#div").submit(function(event) {
    event.preventDefault();
    var result = divide(parseInt($("#div1").val()), parseInt($("#div2").val()));
    $("#output").text(result);
  });
});
