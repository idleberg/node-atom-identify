# atom-identify

[![npm](https://flat.badgen.net/npm/license/atom-identify)](https://www.npmjs.org/package/atom-identify)
[![npm](https://flat.badgen.net/npm/v/atom-identify)](https://www.npmjs.org/package/atom-identify)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-atom-identify)](https://circleci.com/gh/idleberg/node-atom-identify)
[![David](https://flat.badgen.net/david/dep/idleberg/node-atom-identify)](https://david-dm.org/idleberg/node-atom-identify)

Adds data attributes for editor and pane IDs to the respective HTML element

## Installation

`npm install atom-identify -S`

## Usage

Import the module into your Atom package, then invoke it in your `activate` method

**Examples**:

```js
// JavaScript
import identify from 'atom-identify';

export async function activate() {
    identify();
};
```

```coffee
# CoffeeScript
const identify = require "atom-identify"

module.exports =

  activate: () ->
    identify()
```

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-atom-identify) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
