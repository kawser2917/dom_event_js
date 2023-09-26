// option 2 sometimes used
// We will use this sometimes
function makeRed(){
    document.body.style.backgroundColor = "red";
}
// option 3 won't used
const makeBlueButton = document.getElementById("make-blue")
makeBlueButton.onclick = makeBlue

function makeBlue(){
    document.body.style.backgroundColor = "blue"
}

// Option 3 another won't used
const makePurpleButton = document.getElementById("make-purple")
makePurpleButton.onclick = function makePurple(){
  document.body.style.backgroundColor = "purple";
}

// option 4  sometimes will be used
const makePinkButton = document.getElementById("make-pink")
makePinkButton.addEventListener('click',makePink)

function makePink(){
    document.body.style.backgroundColor = "pink"
}

// option 4 another 
const makeGreenButton = document.getElementById("make-green")
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor = "green"
})

// option 4 Final [Mostly Used]
document.getElementById("make-goldenrod").addEventListener("click",function(){
    document.body.style.backgroundColor = "goldenrod"
})

 
 
