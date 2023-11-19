function test(event){
	let xMouse = event.clientX - 8;
	let yMouse = event.clientY - 8;
	text = "X: " + xMouse + " Y: " + yMouse;
	document.getElementById("test").innerHTML = text;
}

function goToTargetPage(site) {
  // Add the "hide" class to the body to trigger the fade-out animation
  document.body.classList.add("hide");

  // After a delay (0.5 seconds, matching the CSS transition duration), navigate to the target page
  setTimeout(function () {
    window.location.href = site;
  }, 500); // 500 milliseconds
}