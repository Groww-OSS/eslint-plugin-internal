# eslint-plugin-internal

ESLint Plugin with customized rules as per requirement and preferences of devs in Groww.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-internal`:

```
$ npm install eslint-plugin-internal --save-dev
```


## Usage

Add `internal` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "internal"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "internal/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





