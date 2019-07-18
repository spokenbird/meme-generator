// Sets the Load Image Button
let loadImageBtn = document.querySelector('.load-image');

// Event listener to trigger Load Image Button
loadImageBtn.addEventListener('click', function (evt) {
  // Prevents page from reloading
  evt.preventDefault()
  // Get image url from input
  let imageURL = document.querySelector('.image-url').value;
  // Variable to set an existing img
  let existingImg = document.querySelector('#preview-img');
  // Set src to input value
  existingImg.src = imageURL;
  });

// Set text input variables for collecting user input
const topTextInput = document.querySelector('#top-text-input');
const bottomTextInput = document.querySelector('#bottom-text-input');


// Set text div variables
const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');

// Send user input text to corresponding text-input div
topTextInput.oninput = () => {
  console.log(topTextInput);
  topText.innerHTML = topTextInput.value;
}
bottomTextInput.oninput = () => {
  bottomText.textContent = bottomTextInput.value;
  console.log(`The value of the bottom text input is currently ${bottomTextInput.value}`)
}



// MAKE MEME BUTTON --> Copy the image div to the lower section of the page
