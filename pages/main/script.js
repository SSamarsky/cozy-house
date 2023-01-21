// Burger-Menu
const burger = document.querySelector('.burger');
const burgerLine = document.querySelectorAll('burger__line');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('.body');
const logo = document.querySelector('.logo');
const shadow = document.querySelector('.shadow');

function toggleMenu() {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    body.classList.toggle('open');
    logo.classList.toggle('open');
    shadow.classList.toggle('open');
}

function closeMennu(event) {
    if (event.target.classList.contains('nav__link')) {
        burger.classList.remove('open');
        nav.classList.remove('open');
        body.classList.remove('open');
        logo.classList.remove('open');
        shadow.classList.remove('open');
    }
}

burger.addEventListener('click', toggleMenu);
burgerLine.forEach((el) =>el.addEventListener('click', toggleMenu));
navLinks.forEach((element) => element.addEventListener('click', closeMennu));

document.addEventListener('click', e => {
    let target = e.target;
    let itsNav = target == nav || nav.contains(target);
    let itsBurger = target == burger;
    let navIsOpen = nav.classList.contains('open');
    
    if (!itsNav && !itsBurger && navIsOpen) {
      toggleMenu();
    }
})


// Popup
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup__btn');
const popupItems = document.querySelectorAll('.slider__item');

function togglePopup() {
    popupBg.classList.toggle('active');
    popup.classList.toggle('active');
    body.classList.toggle('active');
}

popupBtn.addEventListener('click', togglePopup);
popupItems.forEach((elem) => elem.addEventListener('click', togglePopup));

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        body.classList.toggle('active');
    }
});



const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

const sliderBox = document.querySelector('.slider__inner');
const rightBtn = document.querySelector('.slider__btn-rigth');
const leftBtn = document.querySelector('.slider__btn-left');

let widthSlider = sliderBox.offsetWidth; // init 990px
const widthItem = 270;

// function makeGap(width) {
//   let margin = 20;
//   let countItem = Math.floor(width / (270 + margin * 2));
//   let w = countItem * widthItem;

//   margin = (widthSlider - w) / 2;
//   console.log(margin)
//   return margin;
// }

// makeGap(widthSlider)


window.addEventListener('resize', () => {
  widthSlider = sliderBox.offsetWidth;
  console.log(widthSlider);
});

let initSlideView = -720;
sliderBox.style.translate = initSlideView + 'px';
console.log(initSlideView)

function nextSlide() {
  initSlideView = initSlideView - 360;
  if (initSlideView < -1800) {
    initSlideView = 0;
  }
  sliderBox.style.translate = initSlideView + 'px';
  console.log(initSlideView)
}

function prevSlide() {
  initSlideView = initSlideView + 360;
  if (initSlideView > 0) {
    initSlideView = -1800;
  }
  sliderBox.style.translate = initSlideView + 'px';
  console.log(initSlideView)
}

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide)

pets.map(el => {
  const item = document.createElement('div');
  item.classList.add('slider__item');

  const img = document.createElement('img');
  img.classList.add('pets__photo');
  img.src = `../../assets/images/pets/${el.name}.png`;
  img.alt = el.name;

  const petName = document.createElement('div');
  petName.classList.add('pets__name');
  petName.textContent = el.name;

  const button = document.createElement('button');
  button.classList.add('pets__btn');
  button.textContent = 'Learn more';

  item.append(img);
  item.append(petName);
  item.append(button);

  sliderBox.appendChild(item);
})

