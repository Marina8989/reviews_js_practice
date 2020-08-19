const revArray = [
    {
        id: 1,
        img: 'one.jpg',
        name: 'John Smith',
        job: 'UX Design',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aliquid repellendus laborum voluptatum molestias libero itaque autem dolores id nesciunt.'
    },
    {
        id: 2,
        img: 'two.jpg',
        name: 'Anna Smith',
        job: 'UX/UI Design',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aliquid repellendus laborum voluptatum molestias libero itaque autem dolores id nesciunt.'
    },
    {
        id: 3,
        img: 'three.jpg',
        name: 'Sarah Smith',
        job: 'Software Engineer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aliquid repellendus laborum voluptatum molestias libero itaque autem dolores id nesciunt.'
    },
    {
        id: 4,
        img: 'four.jpg',
        name: 'Jane Smith',
        job: 'Web Developer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aliquid repellendus laborum voluptatum molestias libero itaque autem dolores id nesciunt.'
    }
];

let currentItem = 0;

const image = document.querySelector('img');
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const info = document.querySelector('.info');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const random = document.querySelector('.random');

window.addEventListener('DOMContentLoaded', function() {
    let item = revArray[currentItem];
    console.log(item);
});