$("nav a").on("click", function(e) {
  $(".active").attr("class", "");
  $(this).attr("class", "active");
  $("title").text(`Dorper Static | ${$(this).text()}`);
  $("section").hide();
  $(`section[data-page=${$(this).text}]`).show();
});
