// onload canvas setup
window.onload = function() {
	const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");
	const mapImg = document.getElementById("map");
	// draw map to canvas
	ctx.drawImage(mapImg, 0, 0, 600, 600);
	// set clickable blip with opacity
	ctx.save();
	ctx.globalAlpha = 0.6;
	ctx.drawImage(target1, 127, 207, 64, 64);
	ctx.restore();
	document.getElementById("myCanvas").addEventListener("click", test2)
}

// screen dimensions & center
const bodySizeW = document.body.clientWidth;
const bodySizeH = document.body.clientHeight;
const xMouseDef = bodySizeW / 2;
const yMouseDef = bodySizeH / 2;

// mouse tracking
function test(event){
	let xMouse = event.clientX;
	let yMouse = event.clientY;
	text = "X: " + xMouse + " Y: " + yMouse;
	document.getElementById("test").innerHTML = text;
//	if (xMouse > xMouseDef) {
//		window.scrollBy(100, 0)
//	} else if (xMouse < xMouseDef) {
//		window.scrollBy(-100, 0)
//	}
//	} else if (yMouse > yMouseDef) {
//		window.scrollBy(0, 100)
//	}
//	} else if (yMouse < yMouseDef) {
//		window.scrollBy(0, -100)
//	}
}
function test2(){
	let map = document.getElementById("map");
	let mapWidth = map.clientWidth;
	let mapHeight = map.clientHeight;
	const text1 = "W: " + mapWidth + " H: " + mapHeight;
	const text2 = map.getBoundingClientRect();
	document.getElementById("test").innerHTML = text1;
}