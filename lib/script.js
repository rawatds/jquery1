$(document).ready(function(){
    //alert("JQuery loaded!")
});

/*
Same as
jQuery(document).ready(function(){
    alert("JQuery loaded!")
});
*/

$("h3").css({border: "3px dotted blue "});

$("img[alt]").css({border: "3px solid green"});

$("img[alt='seo']").css({border: "3px solid red"});

$("#logo").next().css("border", "1px dotted purple");


var tweet="<div style='margin: 20px 0; padding: 10px; background: #eee'>The big bang theory</div>";

$("#tweets div").prepend(tweet);

$("section").wrap("<div>");

$("section").unwrap();

// ------------------------
var button = $(".button");
var wrapped=true;
var divTxt = "<div class='wrapper'>";

button[0].onclick=function(){

    if(wrapped){
        $("section").unwrap();
        wrapped = false;
        button.text("Wrap");
    } else {
        $("section").wrapAll(divTxt);
        wrapped = true;
        button.text("Unwrap");
    }
};

// ------------------

$("#img1").removeAttr("title");
$("#img1").attr("title", "Web Design ...");

// -----------

$("#lead-banner a")[0].onclick=function(){
    $("header > div").toggleClass("wrapper");
    return false;
};

var myList = $("#points-of-sale li");

myList.on("mouseenter", function(){
    $(this).toggleClass("myclass");
});

myList.on("mouseleave", function(){
    $(this).toggleClass("myclass");
});



