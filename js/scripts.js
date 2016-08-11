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
  $("#add").click(function(event) {
    var result = add(parseInt($("#input1").val()), parseInt($("#input2").val()));
    $("#output").text(result);
    event.preventDefault();
  });
  $("#subtract").click(function(event) {
    var result = subtract(parseInt($("#input1").val()), parseInt($("#input2").val()));
    $("#output").text(result);
    event.preventDefault();
  });
  $("#multiply").click(function(event) {
    var result = multiply(parseInt($("#input1").val()), parseInt($("#input2").val()));
    $("#output").text(result);
    event.preventDefault();
  });
  $("#divide").click(function(event) {
    var result = divide(parseInt($("#input1").val()), parseInt($("#input2").val()));
    $("#output").text(result);
    event.preventDefault();
  });
});
