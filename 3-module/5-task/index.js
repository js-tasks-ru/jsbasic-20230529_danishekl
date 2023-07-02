function getMinMax(str) {
  const elements = str.split(' ');
  const numbers = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const number = parseFloat(element);
    if (!isNaN(number)) {
      numbers.push(number);
    }
  }

const min = Math.min.apply(null, numbers);
const max = Math.max.apply(null, numbers);
  return { min, max };
}

