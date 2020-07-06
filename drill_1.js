'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return this.water/this.flour*100;
  }
};


console.log(`flour=${loaf.flour} , water=${loaf.water}`);

const {flour, water, hydration} = loaf;
console.log(`flour=${flour} , water=${water}`);

console.log(JSON.stringify(loaf));

console.log(`hyrdation=${loaf.hydration()}`);
