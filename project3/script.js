var images = ["water.jpg", "pool.jpg", "ocean.jpg", "waves.jpg"]


$('video').click(function() {
	findGallery()
});

function findGallery() {
	var x = Math.floor(Math.random() * images.length * 4) + 1;

	switch (x) {
		case 1:
		changeImage(findImage(images1));
		break;

		case 2:
		changeImage(findImage(images2));
		break;

		case 3:
		changeImage(findImage(images3));
		break;

		case 4:
		changeImage(findImage(images4));
		break;

		default:
		console.log("Something unexpected happened.");

	}
}

function changeImage(feelings) {
	var = $("<div class=\"images\">" + feelings + "</div>");
	rPosition(element);
	$('#feelings').append(element);
	element.fadeIn(500).delay(5000).fadeOut(7000, function(){
		$(this).remove();
	});
}

function rPosition(element){
	var x = Math.floor(Math.random() * 65);
	var y = Math.floor(Math.random() * 35) + 35;
	var r = Math.floor(Math.random() * 360)
	element.css("top", y + '%');
	element.css("left", x + '%');
}