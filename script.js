$(function () {
  $("#btn").on("click", function () {
    $("ul").append("<li>" + $('[id="text-box"]').val() + "</li>");
    $("#text-box").val("");
  });
});
