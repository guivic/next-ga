# @guivic/next-ga
Next.js HOC to integrate easily integrate Google Analytics and log every page change

# NOT READY FOR PRODUCTION

## Installation

```bash
npm install @guivic/next-ga --save

yarn add @guivic/next-ga
```

## Usage

Add the middleware to your custom _app.js

```javascript
import { withGA } from '@guivic/next-ga';

// ....

export default withGA(MyApp, options);
```

## Options

|Value|Notes|
|------|-----|
|GA_ID| `String`. Optional. GA Tracking ID like `UA-000000-01`. If not provided, it will use `process.env.GA_ID`|

## Author

Guillaume Galas from [Guivic](https://guivic.io)

## License

Licensed under [MIT](./LICENSE).
