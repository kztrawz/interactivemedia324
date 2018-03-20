function random_image() {
	var image1 = "http://kztrawz.github.io/interactivemedia324/project3/images/pond.jpg"
	var image2 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek2.jpg"
	var image3 = "http://kztrawz.github.io/interactivemedia324/project3/images/Flowing.jpg"
	var image4 = "http://kztrawz.github.io/interactivemedia324/project3/images/pond2.jpg"
	var image5 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek.jpg"
	var image6 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek4.jpg"
	var image7 = "http://kztrawz.github.io/interactivemedia324/project3/images/roughsea.jpg"
	var image8 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek5.jpg"
	var image9 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek8.jpg"
	var image10 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek11.jpg"
	var image11 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek9.jpg"
	var image12 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek10.jpg"
	var image13 = "http://kztrawz.github.io/interactivemedia324/project3/images/pool2.jpg"
	var image14 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek12.jpg"
	var image15 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek7.jpg"
	var image16 = "http://kztrawz.github.io/interactivemedia324/project3/images/overwhelmed.jpg"
	var image17 = "http://kztrawz.github.io/interactivemedia324/project3/images/bright.jpg"
	var image18 = "http://kztrawz.github.io/interactivemedia324/project3/images/creek13.jpg"
	var image19 = "http://kztrawz.github.io/interactivemedia324/project3/images/darkness.jpg"
	var image20 = "http://kztrawz.github.io/interactivemedia324/project3/images/waterfall.jpg"
	var array_of_images = new Array ();
	console.log(array_of_images);
	array_of_images.push(image1);
	array_of_images.push(image2);
	array_of_images.push(image3);
	array_of_images.push(image4);
	array_of_images.push(image5);
	array_of_images.push(image6);
	array_of_images.push(image7);
	array_of_images.push(image8);
	array_of_images.push(image9);
	array_of_images.push(image10);
	array_of_images.push(image11);
	array_of_images.push(image12);
	array_of_images.push(image13);
	array_of_images.push(image14);
	array_of_images.push(image15);
	array_of_images.push(image16);
	array_of_images.push(image17);
	array_of_images.push(image18);
	array_of_images.push(image19);
	array_of_images.push(image20);
	var choice = Math.floor(Math.random() * array_of_images.length);
	document.getElementById("feelings").innerHTML = "<img src='" + array_of_images[choice] + "'></img>";
}

