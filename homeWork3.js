/*
图书管理系统中，书籍类（Book）具有借书和还书方法。现需要动态给书籍对象添加冻结方法和遗失方法。使用装饰器设计该系统。
*/

//书籍
function Book(){}
Book.prototype = {
    Borrow:function(){
        console.log("借书")
    },
    Return:function(){
        console.log("还书")
    }
}

//装饰者
function Decorator(book){
    this.book = book
}
Decorator.prototype = {
    Borrow:function(){
       this.book.Borrow()
    },
    Return:function(){
        this.book.Return()
    },
    Frozen:function(){
        console.log("冻结书")
    },
    Lose:function(){
        console.log("丢失书")
    }
}

function newBook(book){
    Decorator.call(this,book)
}
newBook.prototype = new Decorator()

var book = new Book()
var newbook = new newBook(book)

newbook.Borrow()
newbook.Return()
newbook.Frozen()
newbook.Lose()