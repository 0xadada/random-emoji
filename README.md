# @0xadada/random-emoji

_random emoji function with zero dependencies_

## Benefits

- zero dependencies
- doesn't define a range of emoji, just uses math

## Usage

```bash
$ npm i @0xadada/random-emoji
$ npm run -s start
> 🙄
$ npm run -s start
> 😜
$ node
> const { random } = require('@0xadada/random-emoji');
> random()
'😁'
> let a = random();  // defaults to 'emoticons'
> let b = random('emoticons');
> let c = random('food');
> let d = random('animals');
> let e = random('expressions');
> console.log(a, b, c, d, e);
😍 🙄 🍗 🐥 🤢
```

## Arguments

Invoked without arguments, the function will return an emoji character within
the `'emoticons'` range of unicode characters.

**Range**

`random` accepts an optional `String` argument. This string describes the
characters within a subset of the unicode block that `random` will be limited
to. Current options are:

- `'emoticons'` [1F600-1F64F](https://apps.timwhitlock.info/unicode/inspect/hex/1F600-1F64F)
- `'food'` [1F32D-1F37F](https://apps.timwhitlock.info/unicode/inspect/hex/1F32D-1F37F)
- `'animals'` [1F400-1F4D3](https://apps.timwhitlock.info/unicode/inspect/hex/1F400-1F4D3)
- `'expressions'` [1F910-1F92F](https://apps.timwhitlock.info/unicode/inspect/hex/1F910-1F92F)
