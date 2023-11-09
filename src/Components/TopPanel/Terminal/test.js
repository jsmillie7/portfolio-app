const terminal = require('./terminal')

const myTerm = new terminal()
console.log(myTerm.runCommand('echo "This is a test"').stdout)
console.log(myTerm.runCommand('echo value2').stdout)
console.log(myTerm.runCommand('echo \'single quotes\'').stdout)
console.log(myTerm.runCommand('whoami').stdout)
console.log(myTerm.history)
