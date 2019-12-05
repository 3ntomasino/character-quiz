$(document).ready(function() {
  $("form#blanks").submit(function(event) {

    var shoplift = parseInt($("#shoplift").val());
    var operator = $("input:radio[name=operator]:checked").val();
    event.preventDefault();

  if (shoplift === 1||2 && operator === "chocolate") {
    $("#Dustin").show();
  } else if (shoplift === 1||2 && operator === "pizza") {
    $("#Steve").show();
  } else if (shoplift === 1||2 && operator === "apple") {
    $("#Nancy").show();
  } else if (shoplift === 1||2 && operator === "chips") {
    $("#Eleven").show();
  } else if (shoplift === 1||2 && operator === "peanut-butter") {
    $("#Hopper").show();
  } else if (shoplift === 1 && operator === "bacon") {
    $("#Joyce").show();
  }
  });
});
