$("nav a").on("click", function(e) {
  $("nav a").each(function(a, b) {
    b.attr("class", "");
  });
  this.attr("class", "active");
});
