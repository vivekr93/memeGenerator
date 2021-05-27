let topText = document.querySelector('#toptext');
let bottomText = document.querySelector('#bottomtext');
let submitButton = document.querySelector('#submitbutton')
let imageLink = document.querySelector('#image')
const form = document.querySelector('#addmeme')
let memelist = document.querySelectorAll('li');

function createMeme (img, upper, lower){;
    let newLi = document.createElement("div");
    document.body.append(newLi);

    let newCanvas = document.createElement("CANVAS");
    newCanvas.setAttribute('width', img.width);
    newCanvas.setAttribute('height', img.height);
    newLi.appendChild(newCanvas);

    const newButton = document.createElement('button');
    newButton.innerText = 'Remove';
    //newButton.style.position = 'absolute';
    //newButton.style.top = '20px';
    newLi.appendChild(newButton);


    let ctx = newCanvas.getContext('2d');
    ctx.textAlign = 'center';
    ctx.font = "30px Verdana";
    ctx.fillStyle = 'red';
    ctx.drawImage(img, 0, 0);
    ctx.fillText(upper, newCanvas.width/2, newCanvas.height/6);
    ctx.fillText(lower, newCanvas.width/2, newCanvas.height*(9/10));
}

//submit and add meme to page 
submitButton.addEventListener("click", function(obj) {
    obj.preventDefault();
    let image = new Image();
    image.src = imageLink.value;
    createMeme(image, topText.value, bottomText.value);
    topText.value = '';
    bottomText.value = '';
    });

//remove memes if desired
document.body.addEventListener('click', function(obj){
    if (obj.target.tagName === 'BUTTON'){
        if(obj.target.tagName.innerHTML = "Remove"){
            obj.target.parentElement.remove();
        }
    }
});
