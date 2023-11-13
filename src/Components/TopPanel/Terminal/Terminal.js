/**
 * Backend component for JShell. Run commands and add stdout to history
 */
export class Terminal {
    static pid;
    static history;

    constructor() {
        this.pid = 0;
        this.history = []
    }

    /**
     * Increment and retrieve the next PID value
     * @returns Number
     */
    getPid = () => {
        return this.pid++;
    }

    /**
     * Take a string command, execute it, and add it to history
     * @param {String} cmd - command to execute
     * @returns stdout
     */
    runCommand = (cmd) => {
        const splitCmd = cmd.split(/ /);
        const exec = splitCmd[0];
        const args = splitCmd.slice(1).join(' ');
        let exeClass;
        let stdout;

        switch (exec) {
            case 'echo':
                exeClass = new echoCmd(args) 
                stdout = exeClass.execute()
                break;
            case 'whoami':
                stdout = 'A Colorado-based full-stack developer'
                break;
            case 'clear':
                this.history = []
                stdout = ''
                return
            case 'cat':
                exeClass = new catCmd(args)
                stdout = exeClass.execute()
                break;
            default:
                stdout = `jsh: command not found: ${exec}`
                break;
        }
        const result = command(cmd, stdout, this.getPid())
        this.history.push(result)
        return result
    }
}

/**
 * Data structure for each item in the history
 * @param {String} stdin 
 * @param {String} stdout 
 * @param {Number} pid 
 * @returns Object
 */
const command = (stdin, stdout, pid) => ({
    stdin: stdin,
    stdout: stdout,
    pid: pid
})

/**
 * Base class for each command class
 */
class baseCmd {
    static args;

    constructor(args) {
        this.args = args
    }
}

/**
 * Class for executing echo commands
 */
class echoCmd extends baseCmd{

    execute = () => {
        switch (this.args) {
            case '$SHELL':
                return '/bin/jsh'
            default:
                return this.args.replace(/^['"]/, '').replace(/['"]$/, '')
        }
    }
}

/**
 * Class for executing cat commands
 */
class catCmd extends baseCmd{

    execute = () => {
        switch (this.args) {
            case '':
                return 'cat: No file specified'
            case 'welcome.txt':
                return ''
            default:
                return `cat: ${this.args}: No such file or directory`
        }
    }
}