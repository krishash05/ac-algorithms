//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

var radius = parseInt(prompt("What is the radious of the circle?"));
function circleCalculation (r) {
	var area = Math.round(Math.PI * Math.pow(r,2));
	var perimeter = Math.round(2*Math.PI*r);
	var sentence = "The area of the circle is " + area +" and the perimeter of the circle is "+ perimeter +".";
	return sentence;
}

var value = circleCalculation(radius);
console.log(value);
