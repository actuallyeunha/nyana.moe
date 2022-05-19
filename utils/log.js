let chalk = require('chalk');

class Logger {
    constructor(name, color) {
        this.name = name;
        this.color = color || 'cryanBright';
    }

    getName() {
        if ((/^#[0-9A-F]{6}$/i).test(this.color)) {
            return chalk.hex(this.color)('꒰' + this.name + '꒱');
        } else {
            return chalk[this.color]('꒰' + this.name + '꒱');
        }
    }

    plain(...msgs) {
        console.log(
            this.getName(), 
            ...msgs
        )
    }
    log(...msgs) {
        console.log(
            '      ',
            this.getName(),
            ...msgs
        )
    }
    warn(...msgs) {
        console.warn(
            chalk.yellow(`[WRN] `),
            this.getName(),
            ...msgs
        )
    }
    error(...msgs) {
        console.warn(
        chalk.red(`[ERR] `),
        this.getName(),
        ...msgs
        )
    }
    debug(...msgs) {
        console.warn(
            chalk.dim(`[DBG] `),
            this.getName(),
            chalk.dim(...msgs)
        )
    }
    start(...msgs) {
        console.warn(
            chalk.green(`[ ▶ ] `),
            this.getName(),
            ...msgs
        )
    }
    stop(...msgs) {
        console.warn(
            chalk.redBright(`[ ◼ ] `),
            this.getName(),
            ...msgs
        )
    }
    refresh(...msgs) {
        console.warn(
            chalk.cyan(`[ ↺ ] `),
            this.getName(),
            ...msgs
        )
    }
}

module.exports = Logger;