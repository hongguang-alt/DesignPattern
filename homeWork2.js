/*
如果系统中某对象有三个变化维度，如某日志记录器既可以支持不同的操作系统，
还可以支持多种编程语言，并且可以使用不同的输出方式。使用桥接模式设计该系统。
*/

//日志记录器
class Loggers{
    constructor(system,language,output){
        this.system = system
        this.language = language
        this.output = output
    }
    getConetent(){
        console.log(`当前的操作系统是：${this.system.get()},当前的语言是:${this.language.get()},当前的输出方式是:${this.output.get()}`)
    }
}

class System{
    constructor(){}
    get(){
        return "系统"
    }
}

class Language{
    constructor(){}
    get(){
        return "语言"
    }
}


class Output{
    constructor(){}
    get(){
        return "输出"
    }
}

class LinuxSystem extends System{
    constructor(){
        super()
    }
    get(){
        return "Linux操作系统"
    }
}

class China extends Language{
    constructor(){
        super()
    }
    get(){
        return "中文"
    }
}

class Alert extends Output{
    constructor(){
        super()
    }
    get(){
        return "alert"
    }
}

let loggers = new Loggers(new LinuxSystem(),new China(),new Alert())
loggers.getConetent()