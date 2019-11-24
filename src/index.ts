type NamedCharRange = 'emoticons' | 'food' | 'animals' | 'expressions';

const CHAR_RANGE = {
  emoticons: [0x1f600, 0x1f64f],
  food: [0x1f32d, 0x1f37f],
  animals: [0x1f400, 0x1f4d3],
  expressions: [0x1f910, 0x1f92f]
};

const random = function(range: NamedCharRange = 'emoticons'): string {
  const [max, min] = CHAR_RANGE[range];
  const codePoint = Math.floor(Math.random() * (max - min) + min);
  return String.fromCodePoint(codePoint);
};

export = random;
