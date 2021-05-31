import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const rule = require('../../../lib/rules/two-line-above-function');
const typescriptEslintParser = require.resolve("@typescript-eslint/parser")
const RuleTester = require('eslint').RuleTester;


const ruleTester = new RuleTester({
  parser: typescriptEslintParser
}
);

const errors = [{ message: 'Expected two line above function' }];


ruleTester.run('two-line-above-function', rule, {

  valid: [
    {
      code: 'function C(){\nfunction a(){};\n\n\nfunction b(){};\n};'
    },
    {
      code: 'function C(){\nfunction a(){};\n\n\nfunction b(){};\n};\n\n\nfunction foo(){};'
    }
  ],

  invalid: [
    {
      code: 'function C(){\nfunction a(){}\n\nfunction b(){}\n}',
      output: 'function C(){\nfunction a(){}\n\n\nfunction b(){}\n}',
      errors,
    },
  ],
})
