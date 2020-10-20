/*
物资管理系统中的物资采购需要分级审批，主任可以审批1万元及以下的采购单，
部门经理可以审批5万元及以下的采购单，副总经理可以审批10万元及以下的采购单，
总经理可以审批20万元及以下的采购单。20万元以上的采购单需要开会确定。
现使用职责链模式设计该系统。
*/

function Director(money){
    if(money<=1){
        console.log("主任审批通过，价格为"+money+"万元")
    }else{
        return "next"
    }
}
function DivManager(money){
    if(money<=5){
        console.log("部门经理审批通过，价格为"+money+"万元")
    }else{
        return "next"
    }
}
function ViceManager(money){
    if(money<=10){
        console.log("副总经理审批通过，价格为"+money+"万元")
    }else{
        return "next"
    }
}
function Manager(money){
    if(money<=20){
        console.log("总经理审批通过，价格为"+money+"万元")
    }else{
        return "next"
    }
}
function Meet(money){
    if(money>20){
        console.log("需要开会通过，价格为"+money+"万元")
    }else{
        return "next"
    }
}

Function.prototype.after= function(fn){
    var _self = this
    return function(){
        var result = _self.apply(_self,arguments)
        if(result === "next"){
            return fn.apply(fn,arguments)
        }
    }
}

var money = Director.after(DivManager).after(ViceManager).after(Manager).after(Meet)
money(200)