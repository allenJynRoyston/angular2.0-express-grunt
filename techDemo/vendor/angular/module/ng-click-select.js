!function(n,e){return"function"==typeof define&&define.amd?void define(["angular"],function(n){return e(n)}):e(n)}(window.angular||null,function(n){var e=n.module("ngClickSelect",[]);return e.directive("ngClickSelect",function(){return{restrict:"AC",link:function(n,e){e.bind("click",function(){e.select()})}}}),e});