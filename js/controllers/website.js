angular.module('AppWebsite',['ngRoute'])

.controller('aboutcontroller',function($scope,$http){
	$("li").removeClass("active");
    $("#acerca-op").addClass("active");
})


.controller('foodcontroller',function($scope,$http){
	$("li").removeClass("active");
    $("#porta-op").addClass("active");
})