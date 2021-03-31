# MatchLib

A simple pattern matching library

## Getting started

very simple to use:

`npm install matchlib`

after package installation

```javascript
const match = require('match');

const option = match(50)(
  [(key) => key === 18, () => `You are young`],
  [(key) => key === 50, () => `You are old`],
  [(key) => key === 6, () => `You are a child`]
)(() => `Not found!`);

console.log(option);
```
