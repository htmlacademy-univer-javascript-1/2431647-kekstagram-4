const isPalindrom = (line) => {
  line = line.replaceAll(' ', '').toLowerCase();

  return line === [...line].reverse().join('');
};

isPalindrom('bobs');

const getCount = (inputParam) => {
  const newString = inputParam.toString();
  let number = '';
  for (let i = 0; i < newString.length; i++){
    if (!Number.isNaN(parseInt(newString[i], 10))) {
      number += newString[i];
    }
  }
  return parseInt(number, 10);
};

getCount('2023 год');
