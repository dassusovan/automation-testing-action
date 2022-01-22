const core = require('@actions/core')
const github = require('@actions/github')

const DEFAULT_NAME = 'Testing..'

try {

    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-are-you') || DEFAULT_NAME;
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("Time", time);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
    
  } catch (error) {
    core.setFailed(error.message);
  }
