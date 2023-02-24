let num1 = 12;
num1 =23;
const num2 =25;
function add(a, b=0){
    return a + b;
}
const result = add(11)

const add100000000000 = (a,b)=>a + b;

const multilineString = `
1.First line.
2.Second line
`;

const numbers = [12,03,54,96, 43, 79];
const numbers2 = [...numbers,102,2323,343];

const {age, name, address}={
    name:'kamrul',
    age:18,
    address:'Feni'
}
const [first, second, ...rest] = numbers2 ;
console.log(first);
console.log(second);
console.log(rest);
console.log(address);
console.log(age);
console.log(name);