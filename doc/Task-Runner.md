# Task runner configuration

After researching and reading useful documentation [[1]](https://survivejs.com/webpack/appendices/comparison/), I have chosen to use npm CLI as task manager due to its simplicity. Specially useful now, given the struggling to pass the course.

## Running all the tests

The test command is set inside the `package.json`
's `scripts` field as:

`mocha -r ts-node/register tests/**/*.test.ts`

Therefore, in order to call this command and run the tests only run 

    npm test

This command calls for `ts-node/register` as required module because it is needed to support typescript test files.

## Getting all required modules before

Required modules are registered as dependencies or developer dependencies in the `package.json` file and should be installed with `npm install .` command before testing or running the code.

## Preparing the code for deployment

In order to build the javascript files from the typescript code, using `npm build`, the command `tsc` will be called.

## References

[1] SurviveJS. Comparison of build tools. Retrieved from https://survivejs.com/webpack/appendices/comparison/