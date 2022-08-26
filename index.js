const product=(a,b)=>a*b;
console.log(product(4,8));

const student={
    name:"star",
    age:20,
    greet(){
        console.log('Hi, I am '+this.name);
    }
};

console.log(student);
student.greet();