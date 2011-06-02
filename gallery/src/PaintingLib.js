function paintCircle(x, y, r) {
	if (window.context != undefined) {
		context.beginPath();
		context.arc(x, y, r, 0, Math.PI*2, true);
		context.closePath();
		context.fill();		
	}
}

function paintImg(src, x, y, w, h) {
	if (window.context != undefined) {
		context.drawImage(src, x, y, w, h);
	}
}

function paintRect(x, y, w, h) {
	if (window.context != undefined) {
		context.fillRect(x,y,w,h);	
	}
}

function setColor(val) {
	if (window.context != undefined) {
		context.fillStyle = val;	
	}
}

function clearCanvas() {
	if (window.context != undefined) {
		setColor("#000");
	  	context.clearRect(0, 0, canvas.width, canvas.height);	
	}
}