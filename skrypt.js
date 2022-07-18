function rozwiazywanieProporcji(a, b, c, d) {
	
	var rozwiazanie = 0;
	
	if (a == "x" || a == "X") {rozwiazanie = c / d * b;}
	
	if (b == "x" || b == "X") {rozwiazanie = 1/(c / d / a);}
	
	if (c == "x" || c == "X") {rozwiazanie = a / b * d;}
	
	if (d == "x" || d == "X") {rozwiazanie = 1/(a / b / c);}
	
	return rozwiazanie;
	
}
	





function myFunction() {
	
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;
	var d = document.getElementById('d').value;
	
	console.log(rozwiazywanieProporcji(a, b, c, d));
	
	var x = rozwiazywanieProporcji(a, b, c, d);
	
	x = Math.round(x * 100000000000000) / 100000000000000;
	
	document.getElementById("rozwiazanie").innerHTML = `x = ${x}`
	
}