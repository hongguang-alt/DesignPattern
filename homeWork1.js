/* 计算机组装工厂可以将CPU、内存、硬盘、主机、显示器等硬件设备组装在一起构成一台完整的计算机，
且构成的计算机可以是笔记本电脑，也可以是台式机，还可以是不提供显示器的服务器主机。对用户而言，不关心计
算机的组成设备和组装过程，工厂返回给用户的是完整的计算机对象。使用建造者模式实现计算机组装过程。
*/

let ComputerBuilder = (function(){
    function CPU(cpu){
        this.cpu = cpu
    }
    function Memory(memory){
        this.memory = memory
    }
    function HDisk(hdisk){
        this.hdisk = hdisk
    }
    function Host(host){
        this.host = host
    }
    function Monitor(monitor){
        if(!monitor) return this.monitor="无"
        this.monitor = monitor
    }
    return class{
        constructor(cpu,memory,hdisk,host,monitor){
            CPU.call(this,cpu)
            Memory.call(this,memory)
            HDisk.call(this,hdisk)
            Host.call(this,host)
            Monitor.call(this,monitor)
        }
        toString(){
            console.log(`这台机子的配置为：CPU：${this.cpu},内存为:${this.memory},硬盘为:${this.hdisk},主机为:${this.host},显示器为:${this.monitor}`)
        }
    }
})()


let NoteBookComputer =new ComputerBuilder("i5","16G内存","1T","弘基主机","32寸显示器")
let DesktopComputer =new ComputerBuilder("i7","16G内存","1T","长虹主机","27寸显示器")
let ServerComputer =  new ComputerBuilder("i5","16G内存","1T","长虹主机")
NoteBookComputer.toString()
DesktopComputer.toString()
ServerComputer.toString()

