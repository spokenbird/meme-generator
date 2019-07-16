let topTextInput, bottomTextInput, imageInput, createBtn, canvas, context; 

function generateMeme(img) {
    canvas.width = img.width;
    canvas.height = img.height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0);
}


// Initializes the function and sets variables.
function init() {
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    imageInput = document.getElementById('image-input');
    createBtn = document.getElementById('create-meme-btn');
    canvas = document.getElementById('meme-canvas');

    context = canvas.getContext('2d');
    // Resets the canvas size to 0 so that it can be overriden by the image size.
    canvas.width = canvas.height = 0;

    createBtn.addEventListener('click', function() {
        let reader = new FileReader();
        reader.onload = function() {
            let img = new Image;
            img.src = reader.result;
            img.onload = function() {
                generateMeme(img);
            }
        };

        reader.readAsDataURL(imageInput.files[0])
    });
}

init ();