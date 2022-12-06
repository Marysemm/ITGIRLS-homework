class Superhero {
    constructor(name, alterego, city, group, superpower, imgsrc) {
        this.name = name,
            this.alterego = alterego,
            this.city = city,
            this.group = group,
            this.superpower = superpower,
            this.imgsrc = imgsrc
    }
};

let ironMan = new Superhero('Железный Человек', 'Тони Старк', 'Нью-Йорк', 'Мстители', 'Интеллект гениального уровня, опытный ученый и инженер, Силовой бронекостюм: сверхчеловеческая сила, скорость, выносливость, ловкость, рефлексы и чувства, сверхзвуковой полет, энергетический репульсор и проекция ракеты, регенеративное жизнеобеспечение', 'https://c4.wallpaperflare.com/wallpaper/903/280/1015/iron-man-hd-wallpaper-preview.jpg');

let captainAmerica = new Superhero('Капитан Америка', 'Стив Роджерс', 'Нью-Йорк', 'Мстители', 'Повышенная сила, скорость, выносливость, выносливость, ловкость, рефлексы, чувства и умственные способности благодаря сыворотке суперсолдата, мастер боевых искусств и рукопашный боец, ускоренное заживление, мастер-тактик, стратег и полевой командир, использование щита из вибраниум-стального сплава', 'http://www.fondox.net/wallpapers/resoluciones/13/capitan-america-comic_1024x768_1677.jpg');

let godThor = new Superhero('Тор', 'Тор Одинсон', 'Асгард', 'Мстители', 'Сверхчеловеческая сила, скорость, выносливость, долговечность, манипулирование электричеством, манипулирование погодой, способности с помощью Мьельнира: межпространственная телепортация, полет', 'https://images.alphacoders.com/567/thumb-1920-567383.jpg');

let greenHulk = new Superhero('Халк', 'Брюс Беннер', 'Где-то в США', 'Мстители', 'Сверхчеловеческая сила, скорость, выносливость и долговечность, усиление гнева, регенерация, генерация ударной волны, гамма-излучение и манипуляции с ним', 'https://i2.wp.com/fullcirclecinema.com/wp-content/uploads/2021/10/Untitled-design-2021-10-20T170811.634.png?fit=900%2C500&amp;ssl=1')

let blackWidow = new Superhero('Черная Вдова', 'Наташа Романофф', 'Сталинград', 'Мстители', 'Опытный стрелок и мастер владения различным оружием, мастер боевых искусств и боец рукопашного боя, замедление старения и укрепление иммунной системы, опытный тактик, опытный гипнотизер, опытный шпион', 'https://i.ytimg.com/vi/q7_yYP101pU/maxresdefault.jpg');

let superHeroes = [ironMan, captainAmerica, godThor, greenHulk, blackWidow];
let superHeroesJson = JSON.stringify(superHeroes);

function createCards() {
    let card = JSON.parse(superHeroesJson);
    for (let i = 0; i < card.length; i++) {
        let cardInner = "";
        cardInner += `<div class="card__text-container">
        <h2 class="card__title">${card[i].name}</h2>
        <img class="card__img" src="${card[i].imgsrc}">
        <div class="card__paragraph"><p class="card__subtitle">Альтер Эго: </p><span class="card__text">${card[i].alterego}</span></div>
        <div class="card__paragraph"><p class="card__subtitle">Город: </p><span class="card__text">${card[i].city}</span></div>
        <div class="card__paragraph"><p class="card__subtitle">Друзья: </p><span class="card__text">${card[i].group}</span></div>
        <div class="card__paragraph"><p class="card__subtitle">Суперсилы: </p><span class="card__text">${card[i].superpower}</span></div></div>`

        document.querySelectorAll(".main__card")[i].innerHTML = cardInner;
    }
}

document.addEventListener("DOMContentLoaded", createCards);

const starWrapper = document.querySelector('.stars');
const stars = document.querySelectorAll('.stars a');


stars.forEach((star, clickedIdx) => {
    star.addEventListener('click', () => {
        starWrapper.classList.add('disabled');
        stars.forEach((otherStars, otherIdx) => {
            if (otherIdx <= clickedIdx) {
                otherStars.classList.add('active');
            }
        });
        console.log(stars);
        localStorage.setItem('rating', JSON.stringify(stars));
    });
});