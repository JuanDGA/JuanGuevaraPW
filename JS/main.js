let one = document.getElementById('home');
let two = document.getElementById('project');
let three = document.getElementById('about');
var buttonH = document.getElementById('buttonHome');
var buttonPr = document.getElementById('buttonPr');
var buttonAb = document.getElementById('buttonHome');

const home = ()=>{
    buttonH.classList.toggle('selected');
    one.classList.toggle('hide');
    message.classList.toggle('hide');
};

const project = ()=>{
    buttonPr.classList.toggle('selected');
    two.classList.toggle('hide');
    message.classList.toggle('hide');
};