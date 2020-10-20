/*
使用外观模式实现霸天虎机器人，武器系统、防御系统、外形系统的一键启动。
*/
function Arms(){
    console.log("武器系统装备完毕！")
}
function Defense(){
    console.log("防御系统装备完毕！")
}
function Appearance(){
    console.log("外形系统装备完毕！")
}

function ADA(){
    Arms()
    Defense()
    Appearance()
}

ADA()