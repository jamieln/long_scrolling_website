$(window).scroll(function() {
    $("div#vert_counter").text("px:" +$(window).scrollTop());

var scrolltop =$(window).scrollTop();


$("#penguin1").css(
  {
    "left": scrolltop - 1700 + "px",
    "top": 100 + scrolltop + "px"
  }
);

$("#penguin2").css(
  {
    "right": scrolltop - 2500 + "px",
    "top": 400 + scrolltop + "px"
  }
);

$("#trout1").css(
  {
    "left": scrolltop - 4300 + "px",
    "top": 100+ scrolltop +"px"
  }
);

$("#trout2").css(
  {
    "right": scrolltop - 5300 + "px",
    "top": 400 + scrolltop + "px"
  }
);

$("#whale1").css(
  {
    "left": scrolltop - 7600 + "px",
    "top": 100 + scrolltop + "px"
  }
);

$("#whale2").css(
  {
    "right": scrolltop - 9900 + "px",
    "top": 100 + scrolltop + "px"
  }
);

$("#turtle1").css(
  {
    "left": scrolltop - 11700 + "px",
    "top": 100 + scrolltop + "px"
  }
);

$("#turtle2").css(
  {
    "right": scrolltop - 12700 + "px",
    "top": 400 + scrolltop + "px"
  }
);

console.log(scrolltop);

//STUFF FOR ABOUT PAGE//


//DO NOT DELETE BELOW//

});
