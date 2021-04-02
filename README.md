# MatchLib

A simple pattern matching library

## Getting started

very simple to use:

`npm install matchlib`

after package installation

```javascript
import matchlib from 'matchlib';

const option = match(50)(
  [(key) => key === 18, () => `You are young`],
  [(key) => key === 50, () => `You are old`],
  [(key) => key === 6, () => `You are a child`]
)(() => `Not found!`);

console.log(option);
```
