
$(document).ready(function(){


//depending on which netObject you click, different information will populate the info window.
//click on any netObject to open up the info container
  $(".netObject").click(function(e){
  	 e.stopPropagation();
      $("#info").css({"opacity": "1", "transition": "1s", "width": "35%", "transition": "1s"});
    });

    $(".light").click(function(e){
     e.stopPropagation();
      $(".bubbles").css({"opacity": "1", "transition": "1s", "width": "35%", "transition": "1s"});
    });

//removing pop up windows when you click anywhere else
$(document).click(function() {
    //alert("me"); this I used for testing
    $("#info").css({ "width": "0px", "transition": "3s", "opacity": "0.0", "transition": "1s"});
    $(".bubbles").css({ "width": "0px", "transition": "3s", "opacity": "0.0", "transition": "1s"}); 
});
$(".netObject").click(function() {
    $(".bubbles").css({ "width": "0px", "transition": "3s", "opacity": "0.0", "transition": "1s"}); 
});
$(".light").click(function() {
    //alert("me"); this I used for testing
    $("#info").css({ "width": "0px", "transition": "3s", "opacity": "0.0", "transition": "1s"});
});

//making use of the .not() jquery syntax to have only the desired information showing, and if you click anywhere else, the window closes
$(".google").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#google").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "google" ) ).addClass("invisibilityCloak",);
});
$(".youtube").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#youtube").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "youtube" ) ).addClass("invisibilityCloak");
});
$(".facebook").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#facebook").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "facebook" ) ).addClass("invisibilityCloak");
});
$(".baidu").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#baidu").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "baidu" ) ).addClass("invisibilityCloak");
});
$(".wikipedia").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#wikipedia").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "wikipedia" ) ).addClass("invisibilityCloak");
});
$(".reddit").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#reddit").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "reddit" ) ).addClass("invisibilityCloak");
});
$(".yahoo").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#yahoo").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "yahoo" ) ).addClass("invisibilityCloak");
});
$(".tencent").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#tencent").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "tencent" ) ).addClass("invisibilityCloak");
});
$(".taobao").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#taobao").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "taobao" ) ).addClass("invisibilityCloak");
});
$(".amazon").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#amazon").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "amazon" ) ).addClass("invisibilityCloak");
});
$(".tmall").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#tmall").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "tmall" ) ).addClass("invisibilityCloak");
});
$(".twitter").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#twitter").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "twitter" ) ).addClass("invisibilityCloak");
});
$(".sohu").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#sohu").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "sohu" ) ).addClass("invisibilityCloak");
});
$(".instagram").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#instagram").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "instagram" ) ).addClass("invisibilityCloak");
});
$(".vk").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#vk").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "vk" ) ).addClass("invisibilityCloak");
});
$(".windowslive").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#windowslive").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "windowslive" ) ).addClass("invisibilityCloak");
});
$(".jingdongmall").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#jingdongmall").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "jingdongmall" ) ).addClass("invisibilityCloak");
});
$(".sinacorp").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#sinacorp").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "sinacorp" ) ).addClass("invisibilityCloak");
});
$(".sinaweibo").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#sinaweibo").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "sinaweibo" ) ).addClass("invisibilityCloak");
});
$(".yandex").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#yandex").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "yandex" ) ).addClass("invisibilityCloak");
});
$(".haosou").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#haosou").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "haosou" ) ).addClass("invisibilityCloak");
});
$(".netflix").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#netflix").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "netflix" ) ).addClass("invisibilityCloak");
});
$(".pornhub").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#pornhub").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "pornhub" ) ).addClass("invisibilityCloak");
});
$(".twitch").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#twitch").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "twitch" ) ).addClass("invisibilityCloak");
});
$(".linkedin").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#linkedin").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "linkedin" ) ).addClass("invisibilityCloak");
});
$(".tco").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#tco").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "tco" ) ).addClass("invisibilityCloak");
});
$(".csdn").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#csdn").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "csdn" ) ).addClass("invisibilityCloak");
});
$(".microsoft").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#microsoft").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "microsoft" ) ).addClass("invisibilityCloak");
});
$(".bing").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#bing").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "bing" ) ).addClass("invisibilityCloak");
});
$(".microsoftoffice").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#microsoftoffice").removeClass("invisibilityCloak");
   $( ".popup" ).not( document.getElementById( "microsoftoffice" ) ).addClass("invisibilityCloak");
});






$(".f01").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f01").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f01" ) ).addClass("invisibilityCloak");
});
$(".f02").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f02").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f02" ) ).addClass("invisibilityCloak");
});
$(".f03").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f03").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f03" ) ).addClass("invisibilityCloak");
});

$(".f04").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f04").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f04" ) ).addClass("invisibilityCloak");
});

$(".f05").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f05").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f05" ) ).addClass("invisibilityCloak");
});

$(".f06").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f06").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f06" ) ).addClass("invisibilityCloak");
});

$(".f07").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f07").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f07" ) ).addClass("invisibilityCloak");
});

$(".f08").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f08").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f08" ) ).addClass("invisibilityCloak");
});

$(".f09").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f09").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f09" ) ).addClass("invisibilityCloak");
});

$(".f10").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f10").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f10" ) ).addClass("invisibilityCloak");
});
$(".f11").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f11").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f11" ) ).addClass("invisibilityCloak");
});
$(".f12").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f12").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f12" ) ).addClass("invisibilityCloak");
});
$(".f13").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f13").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f13" ) ).addClass("invisibilityCloak");
});
$(".f14").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f14").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f14" ) ).addClass("invisibilityCloak");
});
$(".f15").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    $("#f15").removeClass("invisibilityCloak");
   $( ".nfacts" ).not( document.getElementById( "f15" ) ).addClass("invisibilityCloak");
});







//on click making x visible and all else invisible
// $(".google").click(function(e) {
//     e.stopPropagation(); // This is the preferred method.
//     $("#google").removeClass("invisibilityCloak");
//     $("#youtube, #facebook").addClass("invisibilityCloak");
// });

// $(".youtube").click(function(e) {
//     e.stopPropagation(); // This is the preferred method.
//     $("#youtube").removeClass("invisibilityCloak");
//     $("#google, #facebook").addClass("invisibilityCloak");
// });

// $(".facebook").click(function(e) {
//     e.stopPropagation(); // This is the preferred method.
//     $("#facebook").removeClass("invisibilityCloak");
//     $("#google, #youtube").addClass("invisibilityCloak");
// });

  // $(".google").click(function(){
  //     $("#google").toggleClass("invisibilityCloak");
  //   });
  //   $(".youtube").click(function(){
  //     $("#youtube").toggleClass("invisibilityCloak");
  //   });


});