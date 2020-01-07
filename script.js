var $me = $("#me");
var $offset = (($("body").css("width") - $me.css("height"))/2) + "vh";
$me.css("margin-left", $offset);
let $homeImage = $("#homeImage");
var $homeDivs = $("#homeImage .fade-in");
$homeImage.mouseover(function(){
  $me.css("opacity", "0%");
    $homeDivs.css({
      "transition": "1s",
      "opacity": "100%"
    });
});
function oop(){
  console.log("oop")
}

oop();
