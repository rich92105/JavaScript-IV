
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
}
