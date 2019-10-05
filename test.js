import test from 'ava';
import random from './random-emoji';

test('without arguments it shows an emoticon', t => {
  const a = random();
  const cp = a.codePointAt();
  t.assert(cp >= 0x1f600, 'greater than min');
  t.assert(cp <= 0x1f64f, 'less than max');
});

test('with argument "emoticons" it shows an emoticon', t => {
  const a = random('emoticons');
  const cp = a.codePointAt();
  t.assert(cp >= 0x1f600, 'greater than min');
  t.assert(cp <= 0x1f64f, 'less than max');
});

test('with argument "food" it shows a food emoji', t => {
  const a = random('food');
  const cp = a.codePointAt();
  t.assert(cp >= 0x1f32d, 'greater than min');
  t.assert(cp <= 0x1f37f, 'less than max');
});

test('with argument "animals" it shows an animal friend emoji', t => {
  const a = random('animals');
  const cp = a.codePointAt();
  t.assert(cp >= 0x1f400, 'greater than min');
  t.assert(cp <= 0x1f4d3, 'less than max');
});

test('with argument "expressions" it shows an facial expression emoji', t => {
  const a = random('expressions');
  const cp = a.codePointAt();
  t.assert(cp >= 0x1f910, 'greater than min');
  t.assert(cp <= 0x1f92f, 'less than max');
});
