import {generateRandom} from './util.js';

const DESCRIPTIONS = [
  'Продолжай улыбаться, потому что жизнь — прекрасная вещь и есть еще так много поводов для улыбки.',
  'Хочу увидеть, что произойдет, если я не сдамся.',
  'Лучше начать действовать, совершая ошибки, чем медлить, стремясь к безошибочности.',
  'Не бойся быть не таким, как все, и все захотят быть таким, как ты.',
  'Одна хорошая мысль утром меняет смысл целого дня.',
  'Что бы ни случилось завтра, у нас есть еще сегодня.',
  'Настойчивость окупается сполна. Будь голосом, а не эхом.',
  'Человек на вершине горы не упал туда с неба.',
  'Отсутствие сна — это не проблема. Проблема, когда ты не знаешь, ради чего просыпаешься по утрам.',
  'Мы растем, помогая расти другим.", "Каждое мгновенье жизни — еще одна возможность.',
  'Есть лишь один человек, на которого я могу надеяться ― это я сам. И знаете что? Этот человек ни разу меня не подводил.'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'matvey', 'nikitka', 'cry', 'fottbic', 'kiri4', 'jkkbkbk', 'jjbb',
  'sdhefufjk', 'nikneim', 'privet', 'pogba', 'dzuba', 'gogol', 'golovin', 'kirik',
  'uufcfj', 'namer'
];

function generateComment(number) {
  const message = Array(generateRandom(1, 2));
  for (let i = 0; i < message - 1; i++) {
    message[i] = COMMENTS[generateRandom(0, COMMENTS.length - 1)];
  }

  return {
    id: number,
    avatar: `img/avatar-${generateRandom(1, 6)}.svg`,
    message: message,
    name: NAMES[generateRandom(0, NAMES.length - 1)]
  };
}

function generateDescription(identifier){
  const comments = Array(3);
  for (let i = 0; i < 3; i++) {
    comments[i] = generateComment(i + 1);
  }

  return {
    id: identifier,
    url: 'photos/identifier.jpg',
    descriptions: DESCRIPTIONS[generateRandom(0, DESCRIPTIONS.length - 1)],
    likes: generateRandom(15, 200),
    comments: comments
  };
}

function generateDescriptions(){
  const descriptions = Array(25);
  for (let i = 0; i < 25; i++) {
    descriptions[i] = generateDescription(i + 1);
  }
  return (descriptions);
}

export {generateDescriptions};
