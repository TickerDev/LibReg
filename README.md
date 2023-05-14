# What is LibReg
LibReg is a package allows you to use popular regex(s) easily using a user-friendly library

## Installation

```bash
npm install libreg --save
```

## Usage

```javascript
const LibReg = require("libreg");
const reg = new LibReg();

// output: true
reg.emailValidator("example@example.com");

// output: false
reg.phoneNumberValidator("Phone number go BRRR")
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)