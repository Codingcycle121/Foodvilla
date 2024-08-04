// let arr=[2,2,6,4]
// let arr1=[5,6,7,8]

// console.log(arr.concat(arr1))
// console.log(arr.every(num=>num%2==0))
// console.log(arr.filter(num=>num/2>1))
// console.log(arr.join("-"))
// console.log(arr.map(num=>num*10))
// let num=(arr.push(5,6,7))
// console.log(arr)

// console.log(arr.reduce((accum,cv)=>accum+cv,10))
// console.log(arr.reverse())
// console.log(arr.slice(0,8))
// console.log(arr.some(num=>num%3==0))

// let n=arr.toSource
// console.log(n) not work

// console.log(arr.concat(arr1).sort())
// console.log(arr.toString())
// console.log(arr.unshift(1,2,3))


// const check=(num,num1)=>{
//     return (num===100 || num1===100 || num+num1===100)   
// }

// let ans=check(70,20);
// console.log(ans)


const extension=(ext)=>ext.split('.')
let arr=extension("webpack.html")
let len=arr.length;
console.log(arr[len-1])