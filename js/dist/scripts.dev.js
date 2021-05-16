"use strict";

$(window).scroll(function () {
  var scroll = $(window).scrollTop(); //>=, not <=

  if (scroll > 700) {
    //clearHeader, not clearheader - caps H
    $(".navbar").addClass("navbar_scrolled");
  } else {
    $(".navbar").removeClass("navbar_scrolled");
  }
});
$(".progress-bar").loading();