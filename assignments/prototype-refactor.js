/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
 
// new code 
class GameObject {
    constructor(gameObjectAttributes){
        this.createdAt = gameObjectAttributes.createdAt;
        this.dimensions = gameObjectAttributes.dimensions;
    }
    destroy (){
        return `${this.name} was removed from the game`;
    }
}
 

class CharacterStats extends GameObject {
  constructor(characterStatsAttribute){ 
    super(characterStatsAttribute);
    this.hp = characterStatsAttribute.hp;
    this.name = characterStatsAttribute.name; 
     
}

    takeDamage () {
    return `${this.name} took damage.`;
    }
}


class Humanoid extends CharacterStats {
constructor(humanoidAttributes){
    super(humanoidAttributes);
    this.faction = humanoidAttributes.faction; 
    this.weapons = humanoidAttributes.weapons; 
    this.language = humanoidAttributes.language; 
     
}
greet () {
    return `${this.name} offers a greeting in ${this.language}`; 
  }
  
}
const mage = new Humanoid({
createdAt: new Date(),
dimensions: {
  length: 2,
  width: 1,
  height: 1,
},
hp: 5,
name: 'Bruce',
faction: 'Mage Guild',
weapons: [
  'Sword',
],
language: 'Common Toungue',
});


const swordsman = new Humanoid({
createdAt: new Date(),
dimensions: {
  length: 2,
  width: 2,
  height: 2,
},
hp: 15,
name: 'Sir LanceAlot',
faction: 'The Round Table',
weapons: [
  'Giant Sword',
  'Shield',
],
language: 'Common Toungue',
});

const archer = new Humanoid({
createdAt: new Date(),
dimensions: {
  length: 1,
  width: 2,
  height: 4,
},
hp: 10,
name: 'Gigi',
faction: 'Forest Kingdom',
weapons: [
  'Bow',
  'Dagger',
],
language: 'Elvish',
});

class  Villian {
    constructor (villianAttributes){
   
    this.badBreath = villianAttributes.badBreath;
    this.opponentHealth = villianAttributes.opponentHealth;
  }
 evilLaugh () {
    this.opponentHealth -= 10;
    return `The villian ${this.name} lets out an evil laugh - you will fail and i will defeat you!`;
 }
}


class Hero {
    constructor(heroAttributes){
    this.goodLooks = heroAttributes.goodlooks;
    this.opponentHealth = heroAttributes.opponentHealth;
  }
  studyHard() {
    this.opponentHealth -=20;
    console.log(this.opponent); 
    return `The hero ${this.name} studies hard`; 
  }
  workHard() {
    this.opponentHealth -=50; 
    return `The hero ${this.name} works hard`
  }
  flawlessVictory() {
    this.opponentHealth-= 30; 
    return `The hero learns to program using his weapons ${this.weapons}... and defeats the villian`; 
  }
}
const richard = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Richard',
    faction: 'Saint Diego',
    weapons: [
      'nunchucks', 'ninja stars', 'mace', 'brass knuckles', 'AK-47' 
    ],
    language: 'samurai',
    goodLooks: 'High',
    opponentHealth: 100
  });
  
  failure = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Failure',
    faction: 'Forest Kingdom',
    weapons: [
      'fear','low self-esteem'
    ],
    language: 'Marlarkey',
    badBreath: 'Terrible Breath',
    opponentHealth: 100
  });
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
  console.log("A new battle is about to begin")
  console.log(`The match ${richard.name} vs ${failure.name} has begun.`);
  console.log(`The villian has the following weapons ${failure.weapons}`);
  console.log(`The hero has the following weapons ${richard.weapons}`); 
  console.log(`The villian has the following extra attribute ${failure.badBreath} breath`); 
  console.log(`The villian speaks the following language ${failure.language}`);
  console.log(`The hero speaks the following language ${richard.language}`);
  console.log(failure.evilLaugh());
  console.log(`${richard.name} has been reduced, ${richard.name} now has ${failure.opponentHealth}`);
  console.log(richard.studyHard());
  console.log(`${failure.name} has been reduced, ${failure.name} now has ${failure.opponentHealth}`);
  console.log(richard.workHard());
  console.log(`${failure.name} has been reduced, ${failure.name} now has ${richard.opponentHealth}`) ;
  console.log(richard.flawlessVictory()); 
  console.log(`${failure.name} has been reduced, ${richard.opponentHealth} now has ${richard.opponentHealth}`);
  console.log(`${richard.name} WINS GETS A NEW JOB WITH HIGH PAY!`); 
  
