function test(event){
	let xMouse = event.clientX - 8;
	let yMouse = event.clientY - 8;
	text = "X: " + xMouse + " Y: " + yMouse;
	document.getElementById("test").innerHTML = text;
}