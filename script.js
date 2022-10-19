'use strict';
/* ----------Images------------------------------- */
let dogPic=document.querySelector('#dog');
let catPic=document.querySelector('#cat');
let birdPic=document.querySelector('#bird');
let monkeyPic=document.querySelector('#monkey');
/* ----------Sounds--------------------*/
let dogSound= new Audio('dog.wav');
let catSound=new Audio('cat.wav');
let birdSound=new Audio('bird.wav');
let monkeySound = new Audio('monkey.wav');




dogPic.onclick=function(){
    dogSound.play();
}


catPic.onclick=function(){
   catSound.play();
}

birdPic.onclick=function(){
    birdSound.play();
}

monkeyPic.onclick=function(){
    monkeySound.play();
}
