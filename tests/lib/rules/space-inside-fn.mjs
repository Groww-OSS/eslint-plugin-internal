import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const rule = require('../../../lib/rules/space-inside-fn');
const typescriptEslintParser = require.resolve("@typescript-eslint/parser")
const RuleTester = require('eslint').RuleTester;


const ruleTester = new RuleTester({
  parser: typescriptEslintParser
}
);

const errors = [ { message: 'Expected two lines above nested function' } ];


ruleTester.run('two-line-inside-fn', rule, {

  valid: [
    {
      code: 'function C(){\nfunction a(){};\n\n\nfunction b(){};\n};'
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
