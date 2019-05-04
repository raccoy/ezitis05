function showPage(pid) {
    $(".page").addClass("hidden").filter("[data-id='" + pid + "']").removeClass("hidden");
    return this;
  }
  
  $(".button").on("click", function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var $this = $(this);
    showPage($this.attr("data-page-id"));
    return;
  });
  
  showPage(0);