let nameFirst = 'kamrul';
const age = 23;

const templateString =`${nameFirst} and ${age}`;
const oneParameter = num => num/5;
const twoParameter = (a, b) => (a + 2) * ( b + 2) ;
const threeParameter = (a,b,c) => a * b * c ;
const anotherTwoParameter = (a,b)=>{
    const first = a + 2;
    const second = b + 2;
    return first * second ;
}

const numbers = [1, 2, 3,  4, 5, 6, 7 ];
const [first, second, third, ...rest]  = numbers;
// console.log(third);
const numbers2 = numbers.map(x => x * 5);
// console.log(numbers2);
const oddNumbers = numbers.filter( x => x % 2 == 1);
// console.log(oddNumbers);
// const products =[
//     {name: 'laptop', price: 45000},
//     {name: 'apple', price:65000},
//     {name:'lava', price: 5000}
// ]
// const findPriceFromProducts = products[2].price.find(price =>price <= 5000);
// console.log(findPriceFromProducts);

const products = {
    name: 'Samsung',
    version:'M11',
    power:'5000Am',
    camera: '12Mp',
    lifeTime:'5 years',
    store:{
        address:'Samsung gallery',
        city:'Feni',
        service :{
            company :'Samsung',
            phoneVersion : ['M11', 'M12', 'M15', 'A27', 'S23', 'Ulta S'],
            phonePrice: [12000, 15000, 22999]
        }
    }
}

const {version , store, camera, power ,name} = products;
const {address, city} = store;
// console.log(city);

const returnSumOfThreeParameter = (a, b, c=7) => a + b + c ;
console.log(returnSumOfThreeParameter(1,2,57));