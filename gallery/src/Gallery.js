/**
  * Gallery constructor. Instantiate a new array and an empty focusPic variable.
  */
function Gallery(picString) {
	this.pics = new Array();
	this.createPics(picString);
	this.focusPic = null;
	// Next two lines: freebie code!
	var galleryInstance = this;
	setInterval(function() {galleryInstance.paint()}, 25);
}

/**
  * Given a string of photo IDs, e.g. "one, two, three, four"
  * this method will split the list of names into an array, create a new pic
  * for every ID, and place it accordingly in a 4x3 grid of 200px by 200px thumbnails
  * @param newPictures a string of ID names separated by a comma and a space
  */
Gallery.prototype.createPics = function(newPictures) {
	var picture;
	var newX;
	var newY;
	this.picIDs = new Array();
	this.picIDs = newPictures.split(", ");
	for (var i = 0; i < this.picIDs.length; i++) {
			if (i < 4){
				newX = (i)*204;
			} else if (i > 3 && i < 8) {
				newX = (i-4)*204;
			} else {
				newX = (i-8)*204;
			}
			if (i < 4) {
				newY = 0;
			} else if (i > 3 && i < 8) {
				newY = 204;
			} else {
				newY = 408;
			}
			picture = new Pic(this.picIDs[i], newX, newY);
			this.pics[i] = picture;
	}
	this.paint();
}

/**
  * Given x and y coordinates, zoom in or zoom out (or do nothing) depending on 
  * the current state of the app and which item was selected.
  * @param xx the x coordinate of the user click
  * @param yy the y coordinate of the user click
  */
Gallery.prototype.selectPic = function(xx, yy) {

	if (this.focusPic != null){
		this.focusPic.zoomOut();
		this.focusPic = null;
	} else {
		var looping = true;
		for (var i = 0; i < this.pics.length && looping; i++){
			if (this.pics[i].contains(xx, yy) == true){
				this.focusPic = this.pics[i];
				looping = false;
				this.focusPic.zoomIn();
			} else {
				this.focusPic = null;
			}	
		}
	}
}

/**
  * Clear the canvas, paint all of the thumbnails, then paint the zoomed in image on top (if available)
  */
Gallery.prototype.paint = function() {
	clearCanvas();
	for (var i = 0; i < this.pics.length; i++){
		this.pics[i].paint();
	}
	if (this.focusPic != null){
		this.focusPic.paint();
	}
}