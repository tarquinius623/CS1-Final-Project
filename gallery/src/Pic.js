/** 
  * Pic constructor. Initiate variables and call the paint() method.
  * @param sourceFile a string of the ID of the photo
  * @param xx the x coordinate of the pic
  * @param yy the y coordinate of the pic
  */
function Pic(sourceFile, xx, yy) {
	this.x = xx;
	this.y = yy;
	this.src = sourceFile;
	this.photo = document.getElementById(this.src);
	this.originalX = xx;
	this.originalY = yy;
	this.width = 200;
	this.height = 200;
	this.zoom = "out";
}
/**
  * Zoom in on the picture by changing the x, y, width, and height attributes
  */
Pic.prototype.zoomIn = function() {
	this.width = canvas.width - 100;
	this.height = canvas.height - 100;
	this.x = 50;
	this.y= 50;
	this.zoom = "in";
}
/**
  * Zoom out by restoring the x, y, width, and height attributes to their original settings
  */
Pic.prototype.zoomOut = function() {
	this.width = 200;
	this.height = 200;
	this.x = this.originalX;
	this.y = this.originalY;
	this.zoom = "out";
}
/**
  * Given x and y coordinates, determine whether the point is contained in the pic
  * @param xx the x coordinate
  * @param yy the y coordiate
  * @return true or false whether the point is contained within the boundaries of the pic 
  */
Pic.prototype.contains = function(xx, yy) {
	if (this.x < xx && xx < this.x + this.width) {
		if (this.y < yy && yy < this.y + this.height) {
			return true;
		}
	}
	return false;
}
/**
  * @return the x coordinate
  */
Pic.prototype.getX = function() {
	return this.x;
}
/**
  * @return the y coordinate
  */
Pic.prototype.getY = function() {
	return this.y;
}
/**
  * @param val the new value for the x coordinate
  */
Pic.prototype.setX = function(val) {
	this.x = val;
}
/**
  * @param val the new value for the y coordinate
  */
Pic.prototype.setY = function(val) {
	this.y = val;
}
/**
  * Paint the pic to the canvas using the paintImg() function from the PaintingLib.js
  */
Pic.prototype.paint = function() {
	paintImg(this.photo, this.x, this.y, this.width, this.height);
}