var a=parseInt(window.prompt("Enter a value"));
var b=parseInt(window.prompt("Enter b value"));
var c=parseInt(window.prompt("Enter c value"));

var sq=(b*b)-(4*a*c);
var sqa=Math.sqrt(sq);
var plus=parseInt(((-b)+(sq)/(2*a)));
var minus=parseInt(((-b)-(sq)/(2*a)));
console.log(sq);
console.log(sqa);
console.log(plus);
console.log(minus);
