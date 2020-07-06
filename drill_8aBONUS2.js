'use strict';

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query) {
    const keys = Object.keys(query);
  
    return this.store.heroes.find((hero) => {
      for(let i=0; i < keys.length; i++) {
        if(hero[keys[i]] !== query[keys[i]]) {
          return false;
        }  
      }
      return true;
    });
  },
};

console.log(JSON.stringify(Database.findOne({id: 2})));
console.log(JSON.stringify(Database.findOne({id: 5, name:'Superman'})));
console.log(JSON.stringify(Database.findOne({id: 5, name:'Wonder Woman'})));