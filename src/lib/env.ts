const defaults = {
    help: false,
    do: 'hello' // default action
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
            console.log(s)
            const pair = s.split('=')
            if(!pair) return
        })
        return result
    }
}
Env._Initialize();
