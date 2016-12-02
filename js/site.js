$("nav a").on("click", function(e) {
  $(".active").attr("class", "");
  $(this).attr("class", "active");
});
