



const shopper = {
  name: "guy",
  money: '100',
  blind: false,
  groceryCart: [
    {spinach: 3,
    tacos: 2.50,
    cannedStuff: 4,
    cabbage: 3,
    chocolate: 2.50,
    shampoo: 6,
    popcicle: 3,
    firewood: 7.50,
    quodobo: 3,
    chilacilas: 3 },

  ],
  spendThrift: function spends() {
    const cart = shopper.groceryCart.length
    for (var i = 0; i < cart; i++) {
      let buy = shopper.groceryCart[i]
      return buy
      
    };
  },
    impulseBuy: function impulse() {
      const spontain = Math.floor((Math.random() * 10 ) + 1);
      if (spontain % 2 === 0) {
        return shopper.money - spontain
      } else {
        return shopper.money
      }
  
  }
  
}
console.log(shopper.spendThrift(), shopper.impulseBuy())