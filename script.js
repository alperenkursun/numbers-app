$(document).ready(function () {
  var value1 = 0;
  var value2 = 0;
  var value3 = 0;

  $("#500").text(`${value1}+`);
  $("#17140").text(`${value2}+`);
  $("#1500").text(`${value3}+`);

  const interval1 = setInterval(function () {
    value1++;
    $("#500").text(`${value1}+`);
    if (value1 == 500) {
      clearInterval(interval1);
    }
  }, 8);

  const interval2 = setInterval(function () {
    value2 += 9;
    $("#17140").text(`${value2}+`);
    if (value2 > 17140) {
      $("#17140").text(`17140+`);

      clearInterval(interval2);
    }
  }, 1);

  const interval3 = setInterval(function () {
    value3++;
    $("#1500").text(`${value3}+`);
    if (value3 == 1500) {
      clearInterval(interval3);
    }
  }, 2);
});
