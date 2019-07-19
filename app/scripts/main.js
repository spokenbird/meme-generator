// Sets the background element variable
const background = document.querySelector('.background');

// Sets the Load Image Button
const loadImageBtn = document.querySelector('.load-image');

// Variable to set an existing img
const existingImg = document.querySelector('#preview-img');

// Event listener to trigger Load Image Button
loadImageBtn.addEventListener('click', function (evt) {
  // Prevents page from reloading
  evt.preventDefault();
  // Get image url from input
  let imageURL = document.querySelector('.image-url').value;
  // Set src to input value
  existingImg.src = imageURL;
  // Set the background image to be blurred
  background.style.backgroundImage = `url('${imageURL}')`;
  document.querySelector('.image-url').value = '';
});
// Set text input variables for collecting user input
const topTextInput = document.querySelector('#top-text-input');
const bottomTextInput = document.querySelector('#bottom-text-input');


// Set text div variables
const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');

// Send user input text to corresponding text-input div
topTextInput.oninput = () => {
  topText.innerHTML = topTextInput.value;
}
bottomTextInput.oninput = () => {
  bottomText.textContent = bottomTextInput.value;
}

// Set div to copy to variable
const memeContainer = document.querySelector('.meme-container');
// Set form
const memeForm = document.querySelector('#meme-form');
// Set form button to submit variable
const makeMemeBtn = document.querySelector('#make-meme-btn');
// Event listener to trigger make meme button
makeMemeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  // Make a copy the img-view element and its child nodes
  const imgToCopy = document.querySelector('.img-view');
  const imgCopy = imgToCopy.cloneNode(true);
  imgCopy.removeAttribute('class');
  imgCopy.addEventListener('click', function (event) {
    let meme = event.target.parentElement;
    memeContainer.removeChild(meme);
  });
  memeContainer.appendChild(imgCopy);
  memeContainer.getElementsByTagName('img')[0].removeAttribute('id')
  bottomText.textContent = '';
  topText.textContent = '';
  existingImg.src = 'https://via.placeholder.com/500?text=500+x+500+is+suggested';
  background.style.backgroundImage = "url('https://via.placeholder.com/500?text=500+x+500+is+suggested')";
  memeForm.reset();
});

// Window visibility stuff
// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
 
// If the page is hidden, pause the video;
// if the page is shown, play the video
function handleVisibilityChange() {
  if (document[hidden]) {
    document.title = "Never gonna give you up...";
  } else {
    document.title = "Meme Supereme | Don't let your memes be dreams";
  }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("Update your browser :(");
} else {
  // Handle page visibility change   
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

}