const first= document.getElementById('first');
const last=document.getElementById('last');
const age=document.getElementById('age');
const out=document.getElementById('out');
const btn =document.getElementById('btn');

class Person {
    constructor(){
        this.firstName = first.value;
        this.lastName =last.value;
        this.age=age.value;
    }
}

const func = ()=>{
    document.body.style.background ='bisque';
   const Person1 = new Person();
   console.log(Person1);
   let str=(`Hello,${Person1.firstName} ${Person1.lastName}. You are ${Person1.age} years old.`);
   out.innerHTML=str;
   
}

btn.addEventListener('click',func);

