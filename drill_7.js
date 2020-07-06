/* eslint-disable no-console */
'use strict';

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {

  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function() {
      //console.log(`${name} is a ${race} from ${origin}.`);
      console.log(`${name} is a ${race} of the ${origin} who uses ${weapon}`);
    },
    evaluateFight: function(character) {
      const opponentDmg = this.attack - character.defense > 0 ? this.attack - character.defense : 0;
      const yourDmg = character.attack - this.defense > 0 ? character.attack - this.defense : 0;
      return `Your opponent takes ${opponentDmg} and you receive ${yourDmg}`;
    }
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1,'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit','The Shire',3,2,'Sting and Barrow Blade'),
  createCharacter('Aragon son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6,8, 'a bow and arrow'),
  createCharacter('Legolas','legolas','Elf','Woodland Realm',8,5, 'Hadhafang')
];

characters.push(createCharacter('Arwen Undomiel','arwen','Half-Elf','Rivendell',6,6));

console.log(characters[2].evaluateFight(characters[3]));

characters.find((character)=>character.nickname === 'aragorn').describe();

const hobbits = characters.filter((character) => character.race === 'Hobbit');
console.log(JSON.stringify(hobbits));

