import { Env } from './lib/env';
import { helloWorld } from './helloWorld';

const usage = `[run=[hello] | help]
  run=[hello]  - executes action
  help         - shows help screen
example:        run=hello
  executes 'helloWorld()'
`;

(async () => {
    console.time('ts-template')
    const command = Env.args.run
    switch (command) {
        case 'hello':
            await helloWorld()
            break
        case 'help':
            console.info(usage)
            break
        default:
            console.error(`\nPlease provide parameter or 'help' to see list of avalable parameters\n`)
            console.info(usage)
    }
    console.log(`\nDone`)
    console.timeEnd('ts-template')
})()
