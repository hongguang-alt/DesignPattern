/*
房间中的开关就是命令模式的一个实现，现用命令模式来模拟开关的功能，可控制的对象包括电灯和电风扇。
*/

//接收者
class Light{
    on(){
        console.log("开灯了")
    }
}

class ElectricFan{
    on(){
        console.log("开电扇了")
    }
}

//开关
class Commend{
    constructor(light,electricfan){
        this.light = light
        this.electricfan = electricfan
    }
    cmdLight(){
        console.log("按了灯的开关")
        this.light.on()
    }
    cmdEle(){
        console.log("按了电扇的开关")
        this.electricfan.on()
    }
}

//掌控的人
class Person{
    constructor(commend){
        this.commend = commend
    }
    onLight(){
        this.commend.cmdLight()
    }
    onEle(){
        this.commend.cmdEle()
    }
}
let light =new Light()
let electricfan = new ElectricFan()
let com = new Commend(light,electricfan)
let person = new Person(com)
person.onLight()
person.onEle()