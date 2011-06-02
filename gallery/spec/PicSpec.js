describe('Pic', function(){

    it('should have adequate getter and setter methods for X and Y attributes', function(){
        var p = new Pic("photo", 200, 200);
		p.setX(8);
        expect(p.getX()).toEqual(8);
		p.setX(3);
        expect(p.getX()).toEqual(3);
		p.setY(2);
		expect(p.getY()).toEqual(2);
		p.setY(9);
		expect(p.getY()).toEqual(9);
    });

	it('should store original x and y coordinates called originalX and originalY', function() {
		var p = new Pic("photo", 200, 200);
		expect(p.originalX).toEqual(200);
		expect(p.originalY).toEqual(200);
		p.setX(30);
		p.setY(50);
		expect(p.originalX).toEqual(200);
		expect(p.originalY).toEqual(200);
	});
	
	it('should store the name of the image ID as a string called src', function() {
		var p = new Pic("photo", 200, 200);
		var str = typeof p.src == "string";
		expect(str).toBeTruthy();
	});
	
	it('should store the HTML element containing the image as photo', function() {
		var p = new Pic("photo", 200, 200);
		var imgObj = typeof p.photo == "object";
		expect(imgObj).toBeTruthy();
	});
	
	it('should take up the whole canvas (except a 50 px border all around) when zooming in', function() {
		var p = new Pic("photo", 200, 200);
		p.zoomIn();
		expect(p.getX()).toEqual(50);
		expect(p.getY()).toEqual(50);
		expect(p.width).toEqual(700);
		expect(p.height).toEqual(500);
	});
	
	it('should return to original position and dimensions after zooming back out', function() {
		var p = new Pic("photo", 200, 200);
		p.zoomIn();
		p.zoomOut();
		expect(p.getX()).toEqual(200);
		expect(p.getY()).toEqual(200);
		expect(p.width).toEqual(200);
		expect(p.height).toEqual(200);
	});
	
	it('should not contain points outside of the thumbnail', function() {
		var p = new Pic("photo", 300, 400);
		expect(p.contains(250, 350)).toBeFalsy();
		expect(p.contains(501, 601)).toBeFalsy();
		expect(p.contains(299, 399)).toBeFalsy();
		expect(p.contains(350, 399)).toBeFalsy();
		expect(p.contains(350, 601)).toBeFalsy();
	});
	
	it('should contain points inside the thumbnail', function() {
		var p = new Pic("photo", 300, 400);
		expect(p.contains(301, 401)).toBeTruthy();
		expect(p.contains(499, 500)).toBeTruthy();
		expect(p.contains(499, 599)).toBeTruthy();
	});
	
})