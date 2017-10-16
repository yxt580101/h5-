class Person{
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    sayName(){
        console.log(this.name);
    }
    static type(){
        console.log('人类');
    }
}

class student extends Person{
    constructor(name,age){
        super(name,age)
    }
    goSchool(){
        super.sayName();
        console.log('开始去学校了')
    }
}
const s1=new student('张三',20);
console.log(s1);
s1.goSchool();
// s1.sayName();
// Person.type();