"use strict";

$(document).ready(function () {
  function scroolMe(variable) {
    var datadiv = document.getElementById(variable);
    datadiv.scrollIntoView({
      behavior: "smooth"
    });
  }

  ;
  $("#aplt").mousedown(function () {
    scroolMe("apt_div");
  });
  $("#edu").mousedown(function () {
    scroolMe("edu_div");
  });
  $("#we").mousedown(function () {
    scroolMe("we_div");
  });
  $("#sk").mousedown(function () {
    scroolMe("skills_div");
  });
  $("#ai").mousedown(function () {
    scroolMe("ai_div");
  });
  $("#contacts").hover(function () {
    $("#contacts").animate({
      left: "95%"
    });
  }, function () {
    $("#contacts").animate({
      left: "99.6%"
    });
  });
  $("#cntcsBtn").click(function () {
    $("#contacts").animate({
      left: "95%"
    });
  });
  $(".page").scroll(function () {
    $("#contacts").animate({
      left: "99.6%"
    });
  });
});