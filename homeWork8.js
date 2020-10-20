/*
高校的教学管理系统，如果某个系的系名发生改变，则该系学生所属的系名称也将发生改变。 使用观察者模式实现。
*/

//发布者
class Major{
    constructor(name){
        this.name=name
        //学生订阅
        this.students = []
    }
    change(student){
        this.students.push(student)
    }
    //发布
    notyfy(){
        this.students.map(item=>{
            item.update(this.name)
        })
    }
}

class StudentWatch{
    constructor(name){
        this.name = name
    }
    update(name){
        console.log(this.name + "我的专业改变："+name)
    }
}

let major = new Major("网络工程")
let student1 = new StudentWatch("张三")
let student2 = new StudentWatch("李四")
major.change(student1)
major.change(student2)
major.notyfy()

