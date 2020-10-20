//使用代理模式实现“数学代理运算”例子。

function MathWay(){}
MathWay.prototype = {
    add:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b
    },
    mui:function(a,b){
        return a*b
    },
    div:function(a,b){
        return a/b
    }
}

function MathWayPro(){
    this.way = new MathWay()
}
MathWayPro.prototype = {
    add:function(a,b){
        return this.way.add(a,b)
    },
    sub:function(a,b){
        return this.way.sub(a,b)
    },
    mui:function(a,b){
        return this.way.mui(a,b)
    },
    div:function(a,b){
        return this.way.div(a,b)
    }
}

var way = new MathWayPro()
console.log(way.add(1,2))
console.log(way.sub(1,2))
console.log(way.mui(1,2))
console.log(way.div(1,2))
