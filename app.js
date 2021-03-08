console.dir(document);
console.log(document.lastModified);
console.log(document.title);
document.title = 'I love JavaScript!';
console.dir(document.body);
let instructions = document.getElementById('instructions');
console.log(instructions.innerHTML);
console.log(instructions.innerText);
instructions.innerHTML = '<span>Hello there</span>';
console.log(instructions.innerHTML);
console.log(instructions.innerText);
instructions.style.fontSize = '32px';
instructions.style.paddingBottom = '50px';
let buttons = document.getElementsByClassName('but');
console.log(buttons);
console.log(buttons[1].id);
buttons[1].style.color = 'pink';
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].style.color = 'pink';
}
let buttons2 = document.getElementsByTagName('button');
console.log(buttons2);
let instructions = document.querySelector('#instructions');
console.log(instructions);
instructions.style.color = '#FF0000';
let firstLabel = document.querySelector('label');
console.log(firstLabel);
let buttons = document.querySelectorAll('.but');
console.log(buttons);