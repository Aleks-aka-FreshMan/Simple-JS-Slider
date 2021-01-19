const btnNextSlide = document.body.querySelector('.btn-next-slide');
const btnPreviousSlide = document.body.querySelector('.btn-previous-slide');
const currentSlide = document.body.querySelector('.current-slide');
const sliderDots = document.body.querySelector('.slider-dots');
const dots = document.body.querySelectorAll('.dot');



let numberOfSlide = 0; // номер текущего слайда

const imagesOfSlide =  // изображения слайда
  [
    "https://picsum.photos/600/400",
    "https://picsum.photos/600/400?grayscale",
    "https://picsum.photos/600/401",
    "https://picsum.photos/600/401?grayscale",
    "https://picsum.photos/600/402",
    "https://picsum.photos/600/402?grayscale",
    "https://picsum.photos/600/403"
  ];



btnNextSlide.addEventListener('click', NextSlide);
btnPreviousSlide.addEventListener('click', PreviousSlide);
sliderDots.addEventListener('click', ShowSlide);



function NextSlide() {

  if (++numberOfSlide >= imagesOfSlide.length) numberOfSlide = 0;

  ChangeSlide(numberOfSlide);

  for (let i = 0; i < sliderDots.childElementCount; i++) {
    sliderDots.children[i].classList.remove('active');
  }

  sliderDots.children[numberOfSlide].classList.add('active');

  //console.log(`number of current slide = ${numberOfSlide}`);

}

function PreviousSlide() {

  if (--numberOfSlide <= -1) numberOfSlide = imagesOfSlide.length - 1;

  ChangeSlide(numberOfSlide);

  for (let i = 0; i < sliderDots.childElementCount; i++) {
    sliderDots.children[i].classList.remove('active');
  }

  sliderDots.children[numberOfSlide].classList.add('active');
  //console.log(`number of current slide = ${numberOfSlide}`);
}

function ChangeSlide(numberOfSlide) {
  currentSlide.children[0].setAttribute('src', imagesOfSlide[numberOfSlide]);
}

function ShowSlide(e) { // нахождение индекса точки и вывод слайда

  //const node = e.target.parentNode;
  //index = [...node.children].indexOf(e.target)

  if (e.target.classList.contains('dot')) {

    for (let i = 0; i < sliderDots.childElementCount; i++) {
      sliderDots.children[i].classList.remove('active');
    }

    e.target.classList.add('active');

    numberOfSlide = Array.from(e.target.parentNode.children).indexOf(e.target)

    ChangeSlide(numberOfSlide);
  }

}

//----- после загрузки показываем первую картинку -------

const image = document.createElement('img');
image.setAttribute("src", "imagesOfSlide[0]");
//console.log(image.complete);
currentSlide.appendChild(image);

ChangeSlide(0);

//----- добавляем индикаторы(точки) к слайдеру -----------
for (let i = 0; i < imagesOfSlide.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  sliderDots.appendChild(dot);

  if (i == 0) { // при первоначальной загрузке устанавливаем активным первый слайд
    dot.classList.add('active');
  }
}


//console.log(sliderDots.children.length);
// console.log(sliderDots.childNodes);
// console.log(sliderDots.children);
// console.log(sliderDots.children[0]);
// console.log(document.body.getElementsByClassName('dot').length);
// console.log(document.body.getElementsByClassName('dot')[0]);
// console.log(document.body.querySelectorAll('.dot'));
// console.log(document.body.querySelectorAll('.dot')[0]);

