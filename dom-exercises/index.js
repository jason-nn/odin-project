const container = document.querySelector('.container');

const content = document.createElement('div');
content.textContent = 'content';

container.appendChild(content);

const box = document.querySelectorAll('.box');

for (let b of box) {
  b.style.width = '100px';
  b.style.height = '100px';
  b.style.backgroundColor = 'tomato';
  b.style.marginBottom = '10px';
}

const itemOne = document.createElement('p');
itemOne.style.color = 'red';
itemOne.textContent = "Hey, I'm red!";

const itemTwo = document.createElement('h3');
itemTwo.style.color = 'blue';
itemTwo.textContent = "Hey, I'm a blue h3!";

const itemThree = document.createElement('div');
itemThree.style.backgroundColor = 'pink';
itemThree.style.border = '1px solid black';
itemThree.style.padding = '20px';

const itemThreeSubItemOne = document.createElement('h1');
itemThreeSubItemOne.textContent = "I'm in a div!";

const itemThreeSubItemTwo = document.createElement('p');
itemThreeSubItemTwo.textContent = 'Me too!';

itemThree.append(itemThreeSubItemOne, itemThreeSubItemTwo);

container.append(itemOne, itemTwo, itemThree);

const buttonTwo = document.querySelector('#button-2');
buttonTwo.onclick = () => {
  alert('hello!');
};

const buttonThree = document.querySelector('#button-3');
buttonThree.addEventListener('click', () => {
  alert('hello!');
});

buttonThree.addEventListener('click', function (e) {
  console.log(e.target);
  e.target.style.color = 'blue';
});
