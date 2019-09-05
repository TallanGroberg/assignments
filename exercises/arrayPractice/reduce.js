// function total(arr) {
//   return arr.reduce((total, final) => {
//    return total += final
//    })
// }


// console.log(total([1,2,3])); // 6


function stringConcat(arr) {
   const str = arr.join('')
   const ar = str.split(',')
   return ` ${ar} `
}

console.log(stringConcat([1,2,3])); // "123"

// function totalVotes(arr) {
//   const vot = arr.map( v => v.voted === true)
//   const ballad = vot.filter( b => b === true)
//   return ballad.length
// }

// var voters = [
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Phil' , age: 21, voted: true},
//    {name:'Ed' , age:55, voted:true},
//    {name:'Tami' , age: 54, voted:true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7

// function shoppingSpree(arr) {
//   let all = arr.map( (t ) => t.price)
//   return all.reduce( (t,f) => {
//     return t += f 
//   })
// }

// var wishlist = [
//    { title: "Tesla Model S", price: 90000 },
//    { title: "4 carat diamond ring", price: 45000 },
//    { title: "Fancy hacky Sack", price: 5 },
//    { title: "Gold fidgit spinner", price: 2000 },
//    { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005



function flatten(arr) {
  return arr.reduce((total, a) => total.concat(a))

}



var arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6, [ {name: 'dick'}]]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];