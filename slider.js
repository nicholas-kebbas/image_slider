$(".handle").draggable({ 
  axis: "x",
  containment: "parent",
  drag: function() {
    var position = $(this).position();
    var positionExtra = position.left + 6;
    $(".coverImage").width(positionExtra + "px");
  }
});
