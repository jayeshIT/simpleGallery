var received_data = arguments[0] || {};
var data = received_data.data;
var currpos = received_data.pos;

var MynewDta = [];
for (var i = 0; i < data.length; i++) {
	Titanium.API.info(data[i].image);
	var imageview = Titanium.UI.createImageView({
		top : 0,
		left : 0,
		right : 0,
		bottom : 0,
		image : data[i].image
	});
	MynewDta.push(imageview);
}
$.scrollable1.setViews(MynewDta);
$.scrollable1.currentPage = currpos;
