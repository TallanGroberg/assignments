// function doubleNumbers(arr){
//   return arr.map( d => d * 2)
// }



// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// function stringItUp(arr){
//  const str =  arr.join(',')
//  return str.split(',')
// }
// function stringItUp(arr){
//  const str =  arr.join(',')
//  newarr = str.split(',')
//  return newarr.map( s => s)
// }
// function stringItUp(arr){
//   return arr.map( s => s.toString())
//  }
// console.log(stringItUp([2, 5, 100, 'd'])); // ["2", "5", "100"]

// slice the first letter off 
// cap the first letter

// function capitalizeNames(arr){
//   let stuff = arr.map( n => {
//     n = n.toLowerCase()
//       return n.charAt(1).toUpperCase() + n.slice(1)
//     // const all = n.slice(1)
//     // const fl = n.charAt(0).toUpperCase()
//     // const news = [fl, all].join('')
   
//   })
//   return stuff
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


function namesOnly(arr){

  return arr.map( n => n.name)
}

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// function makeStrings(arr){
 

 
//   return arr.map( n => {
//     if (n.age > 18) {
//       return `${n.name } has sold out!!!!`
//     } else {
//     return `${n.name} is to young to sell out `
//     }
//   })
// };

//   console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]



function makeStrings(arr){
 
  return arr.map( n => {
   return `<h1> ${n.name} </h1> <h2> ${n.age} </h2>`
  })
};

  console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));