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
    
    next.addEventListener('click', function() {
        currentItem++;
        if(currentItem > revArray.length - 1) {
           currentItem = 0;
        }
        revDetails(revArray);
    });
    
    prev.addEventListener('click', function() {
        currentItem--;
        if(currentItem < 0) {
            currentItem = revArray.length - 1;
        }
        revDetails(revArray);
    });

    random.addEventListener('click', function() {
        currentItem = randNum();
        revDetails(revArray);
    });

    function randNum() {
       return Math.floor(Math.random() * revArray.length);
    }
    


    function revDetails(person) {
        let item = person[currentItem];
        image.src = item.img;
        name.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.info;
    }
});

