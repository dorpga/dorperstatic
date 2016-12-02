$("nav a").on("click", function(e) {
  $("nav a").each(function(a, b) {
    b.addr("class", "");
  });
  this.attr("class", "active");
});
