$("nav a").on("click", function(e) {
  $("nav a").each(function(a, b) {
    a.addr("class", "");
  });
  this.attr("class", "active");
});
