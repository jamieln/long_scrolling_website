$(window).scroll(function() {
    $("div#vert_counter").text("px:" +$(window).scrollTop());

var scrolltop =$(window).scrollTop();


$("#penguin1").css(
  {
    "left": scrolltop - 1400 + "px",
    "top": 100 + scrolltop + "px"
  }
);

$("#penguin2").css(
  {
    "right": scrolltop - 2000 + "px",
    "top": 400 + scrolltop + "px"
  }
);

$("#trout1").css(
  {
    "left": scrolltop - 3700 + "px",
    "top": 100+ scrolltop +"px"
  }
);

$("#trout2").css(
  {
    "right": scrolltop - 4600 + "px",
    "top": 400 + scrolltop + "px"
  }
);

$("#whale1").css(
  {
    "left": scrolltop - 6900 + "px",
    "top": 100 + scrolltop + "px"
  }
);

$("#whale2").css(
  {
    "right": scrolltop - 9200 + "px",
    "top": 100 + scrolltop + "px"
  }
);

$("#turtle1").css(
  {
    "left": scrolltop - 11000 + "px",
    "top": 100 + scrolltop + "px"
  }
);

$("#turtle2").css(
  {
    "right": scrolltop - 12100 + "px",
    "top": 400 + scrolltop + "px"
  }
);

console.log(scrolltop);

//STUFF FOR ABOUT PAGE//

//BUBBLE TEXT//

// Created for an Articles on:
// https://www.html5andbeyond.com/bubbling-text-effect-no-canvas-required/

jQuery(document).ready(function($){

    // Define a blank array for the effect positions. This will be populated based on width of the title.
    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4,6,8,10];

    // Push the header width values to bArray
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }

    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function(){

        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );


    }, 350);

});


//DO NOT DELETE BELOW//

});
