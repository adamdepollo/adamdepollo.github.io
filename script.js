let $homeBack = $("#homeBack");
let $offset = (($("body").css("width") - $homeBack.css("height"))/2) + "vh";
$homeBack.css("left", $offset);
let $homeImage = $("#homeImage");
let $homeDivs = $("#homeImage .fade-in");
$homeImage.mouseover(function(){
  $homeBack.css("opacity", "0%");
    $homeDivs.css({
      "transition": "2s",
      "opacity": "100%"
    });
});

let $writingHeader = $(".writingHeader");
$writingHeader.hover(function(){
  $('html,body').css('cursor','pointer');
  $(this).children().children("h4").addClass("writingHover");
}, function(){
  $('html,body').css('cursor','default');
  $(this).children().children("h4").removeClass("writingHover");
});

$writingHeader.click(function(){
  $(this).children().children(".writingChild").toggle("slow");
});
