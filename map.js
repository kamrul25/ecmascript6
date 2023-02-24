const first = [1,2,3];
const second = [4,5,6,7,8,9];
const maximum = (first,second)=>{
    const newArray = [...first , ...second];
    const largeNumber = Math.max(...newArray)
    return largeNumber;
};
const result =  maximum(first, second);
console.log(result);
const third =second.forEach(element =>console.log(element))