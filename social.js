
profile = [ 

  

  {
    name: 'bob',
  hobbies: [
    'fishing', 'stripclubs', 'scuba diving'
  ],
  friends: [
    {name: 'sally', distantFriends: {
      name: 'rose'
    }},
    {name: "gab", },
  ],
},
  {name: 'sally',
  hobbies: [
    'long walks on the beach', 'partying', 'fishing'
  ],
  friends: [
    {name: "bob", distantFriends: {
      name: 'sally'
    }}, {name: "rose", distantFriends: { name: 'rose'}}
  ],
},
  {name: 'gab',
  hobbies: [
    'strip clubs', 'cooking', 'wood working'
  ],
  friends: [
    {name: 'jimbo'}, {name: 'taylor'},
  ],
},
  {name: 'rose',
  hobbies: [
    '80 horror films', 'long walks on the beach', 'partying'
  ],
  friends: [
    {name: "bob"}, {name: 'rose'},
  ],
},
  {name: 'jimbo',
  hobbies: [
    'BMX', '80s horror films', 
  ],
  friends: [
    {name: 'taylor'}, {name: 'jimbo'},
  ],
},
  {name: 'taylor',
  hobbies: [
    'fine dining', 'galabanting', 'scuba diving'
  ],
  friends: [
    {name: 'bob'}, {name: 'gab'},
    ],
  },
{  aquantence: function findAquaint() {
    const bobAquait = profile[0].friends[0].distantFriends.name
    const sallyAquait = profile[1].friends[0].distantFriends.name
    if (bobAquait ===  sallyAquait) {
      console.log(`${profile[0].name} and ${profile[1].name} has same distant friends`)
    } else {
      console.log(`${profile[0].name} and ${profile[1].name} dont have any common aquiancees`)
    }
    
  }}

  
]

console.log(profile[6].aquantence())

