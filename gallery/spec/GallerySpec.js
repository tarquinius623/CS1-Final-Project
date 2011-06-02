describe('Gallery', function() {
	
    it('should keep an array of pictures that is empty at first', function(){
        var pm = new Gallery();
		expect(pm.pics.length).toEqual(0);
    })

	it('should set the focusPic to null by default', function() {
		var g = new Gallery();
		expect(g.focusPic).toBeNull();
	})

	it('should be able to update the array of pictures in the manager', function(){
        var pm = new Gallery();
		expect(pm.pics.length).toEqual(0);
		pm.createPics("cassone, casstwo, cassthree, cassfour");
		expect(pm.pics.length).toEqual(4);
		var tmp = pm.pics[0];
		var isAPic = typeof tmp == 'object';
		expect(isAPic).toBeTruthy();
		var tmp = pm.pics[3];
		var isAPic = typeof tmp == 'object';
		expect(isAPic).toBeTruthy();
		expect(pm.pics[4]).toBeUndefined();
    })

	it('should align the images in rows and columns with at least 3 px of spacing between', function() {
		var pm = new Gallery();
		pm.createPics("one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve");
		
		expect(pm.pics[0].getX()).toBeLessThan(50);
		expect(pm.pics[0].getY()).toBeLessThan(50);
		expect(pm.pics[3].getX()).toBeGreaterThan(550);
		expect(pm.pics[4].getX()).toBeLessThan(50);
		expect(pm.pics[4].getY()).toBeGreaterThan(50);
		expect(pm.pics[7].getX()).toBeGreaterThan(550);
		expect(pm.pics[7].getY()).toBeGreaterThan(50);
		expect(pm.pics[7].getY()).toBeGreaterThan(150);
		expect(pm.pics[8].getX()).toBeLessThan(50);
		expect(pm.pics[8].getY()).toBeGreaterThan(300);
		
		var spacing = pm.pics[0].x - pm.pics[1].x;
		expect(Math.abs(spacing)).toBeGreaterThan(pm.pics[1].width + 3);
		var spacing = pm.pics[2].x - pm.pics[1].x;
		expect(Math.abs(spacing)).toBeGreaterThan(pm.pics[1].width + 3);
		var spacing = pm.pics[8].y - pm.pics[0].y;
		expect(Math.abs(spacing)).toBeGreaterThan(pm.pics[0].height + 3);
		expect(pm.pics[0].x).toEqual(0);
	});
	
	it('should zoom in on an image when you click it', function() {
		var g = new Gallery();
		g.createPics("one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve");
		g.selectPic(100, 100);
		expect(g.focusPic).toEqual(g.pics[0]);
		
		var g = new Gallery();
		g.createPics("one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve");
		g.selectPic(400, 100);
		expect(g.focusPic).toEqual(g.pics[1]);
	});
	
	it('should zoom out on an image whenever you click on the canvas after zooming in', function() {
		var g = new Gallery();
		g.createPics("one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve");
		g.selectPic(100, 100);
		expect(g.focusPic).toEqual(g.pics[0]);
		
		g.selectPic(300, 300);
		expect(g.focusPic).toBeNull();
	})
	
	it('should not zoom in on a pic if one was not actually selected', function() {
		var g = new Gallery();
		g.createPics("one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve");
		g.selectPic(202, 2);
		expect(g.focusPic).toBeNull();
	})
	
})