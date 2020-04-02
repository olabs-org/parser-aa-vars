# parser-aa-vars

### Install
```bash
npm install parser-aa-vars
```

### Example
```javascript
const parser = require('parser-aa-vars');

const definition = {
  messages: [
    {
      if: `{trigger.data.d}`,
      app: 'data',
      payload: `{trigger.data.d}`
    },
    {
      if: `{trigger.data.sub}`,
      app: 'data',
      payload: {
        xx: 66.3,
        sub: `{trigger.data.sub}`
      }
    },
    {
      if: `{trigger.data.output}`,
      app: 'payment',
      payload: {
        asset: "base",
        outputs: [
          `{trigger.data.output}`
        ]
      }
    },
    {
      if: `{trigger.data.payment}`,
      app: 'payment',
      payload: `{trigger.data.payment}`
    },
  ]
};

console.log(parser(definition)); // [ 'd', 'sub', 'output', 'payment' ]
```