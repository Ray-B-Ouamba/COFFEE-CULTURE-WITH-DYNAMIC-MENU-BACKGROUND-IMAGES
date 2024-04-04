document.addEventListener("DOMContentLoaded", function(){
  var images = ["cafe1.jpg","cafe2.jpg","cafe3.jpg","cafe4.jpg"];

  var currentImageIndex = 0;

  function changeImage(){
    // code Change the index of the current image to go to the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // code get the URL image of the next image in the loop
var nextImage = "url('" + images[currentImageIndex] + "')";

// change the background image in the body
document.body.style.backgroundImage = nextImage;

  }

  // call the function for the first time to the process of changing image can start
  changeImage();
  
  // code to utilise "setInterval" to call the function each 2min
  
  setInterval(changeImage, 20000); // 1s = 1000 milleseconds; so 1min = 60000milleseconds
});

