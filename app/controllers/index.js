var MyData = [];
for (var i = 0; i < 100; i++) {
	var imgView = Titanium.UI.createImageView({
		image : '/appicon.png',
		height : 80,
		width : 80,
		top : 10,
		left : 10,
		id : i,
	});
	$.scrollView1.add(imgView);
	MyData.push(imgView);
}

$.scrollView1.addEventListener('click', function(e) {
	var JSData = {
		data : MyData,
		pos : e.source.id
	};

	var GalleryBigWin = Alloy.createController('GalleryBig', JSData).getView();
	GalleryBigWin.open();
});

$.index.open();
