/*
比如超级玛丽，就可能同时有好几个状态比如 跳跃，移动，射击，蹲下 等，
如果对这些动作一个个进行处理判断，需要多个if-else或者switch不仅丑陋不说，
而且在遇到有组合动作的时候，实现就会变的更为复杂，这里可以使用状态模式来实现。
*/

class SuperMarie{
    constructor(){
        this.state = null
    }
    change(state){
        this.state = state
        this.state.doing()
    }
}

class MyState{
    doing(){
        console.log("做一些事!")
    }
}

class jumpState extends MyState{
    doing(){
        console.log("跳跃")
    }
}
class moveState extends MyState{
    doing(){
        console.log("移动")
    }
}
class shotState extends MyState{
    doing(){
        console.log("射击")
    }
}
class downState extends MyState{
    doing(){
        console.log("蹲下")
    }
}

var supermarie = new SuperMarie()
supermarie.change(new jumpState())
supermarie.change(new moveState())
supermarie.change(new shotState())
supermarie.change(new downState())



