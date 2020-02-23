const defaults = {
    help: false,
    run: 'hello' // default action
}

export class Env {
    private static _args = defaults
    static get args(){
        return this._args;
    }
    static _Initialize(){
        // load settings from file
        this._args =  Object.assign({}, defaults, this.parseCmdLine())
    }

    private static parseCmdLine(): {}{
        const result = {}
        process.argv.forEach(s => {
            // console.info(s)
            const pair = s.split('=')
            if(!pair) return
            result[pair[0]] = pair[1]
        })
        return result
    }
}
Env._Initialize();
