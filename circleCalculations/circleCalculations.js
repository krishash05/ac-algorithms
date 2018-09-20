//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

function circleCalculation () {
	var radius = parseInt(prompt("What is the radious of the circle?"));
	var area = 3.14(radius^2);
	return area;
	var perimeter = 2(3.14)radius;
	return perimeter;

};
console.log("The area of the circle is " + area +" and the perimeter of the circle is "+ perimeter);

circleCalculation(10);