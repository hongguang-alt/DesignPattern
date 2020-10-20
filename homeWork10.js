/*
某系统需要对重要数据进行加密，并提供了几种加密方案（凯撒加密、des加密等），对该加密模块进行设计，使得用户可以动态选择加密方法。
用策略模式实现。
*/

function CaesarCipher(data){
    console.log("使用了凯撒加密："+ data)
    return data+"凯撒"
}
function Des(data){
    console.log("使用了des加密："+ data)
    return data+"des"
}

function ImportantData(data){
    this.data = data
}

//进行加密方式
ImportantData.prototype.encryData = function(encry){
    this.data = encry(this.data)
}
//获取数据
ImportantData.prototype.getData = function(){
    console.log(this.data)
}

let importdata =new ImportantData(100)
importdata.encryData(Des)
importdata.getData()