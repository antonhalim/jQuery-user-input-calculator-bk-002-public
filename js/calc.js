'use-strict';
$(function(){
  var calculator = new Calculator();
});

function Calculator(){
  $(document).ready(function(){
    $("#equals").click(function(){
      var number1 = $("#number1").val()
      var number2 = $("#number2").val()
      var operation = $("#operation").val()

      if(isNaN(number1) || isNaN(number2)){
        $("#result").text('Sorry, one of those is not a valid number!');
      }else if(checkOperation(operation) === false){
        $("#result").text('Sorry, not a valid operation!');
      }else{
        counter(number1, operation, number2)
      }
    });

    function checkOperation(operation){
      var operations = ["+", "-", "*", "/"];
      for(var i = 0; i < operations.length; i++){
        if(operations[i] === operation){
          return true
        }
      }
      return false
    };

    function counter(num1, operation, num2){
      var number1 = parseInt(num1), number2 = parseInt(num2);
      if(operation === "+"){
         $("#result").text(number1 + number2);
      }else if (operation === "-") {
         $("#result").text(number1 - number2);
      }else if (operation === "*") {
         $("#result").text(number1 * number2);
      }else {
         $("#result").text(number1 / number2);
      }
    };
  });
};
