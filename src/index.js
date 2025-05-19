// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"
let veggie = 'carrot';
veggie = 'onion';
console.log(veggie);
console.log('\n');
//
//
// =========================
//      DATA STRUCTURES
// =========================

//animals = ["tiger", "panda", "raccoon"]
//animals.append("opossum")

let animals = ['tiger', 'panda', 'raccoon'];
animals.push('opossum');
console.log(animals);
console.log('\n');

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True

const dog = {
    name: 'Sprinkles', 
    age: 3
};
dog.isFriendly = true;
console.log(dog);
console.log('\n');
//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)
let num = 5;
for(let i = 0; i < num; i++){
    console.log(i);
}
console.log('\n');

// for animal in animals:
//    print(animal)

for (let animal of animals){
    console.log(animal);
}
console.log('\n');
// for k, v in dog.items():
//    print(f"{k}: {v}")

//for (let [key, value] of Object.entries(dog)) {
//    console.log(`${key}: ${value}`);
//  }

Object.entries(dog).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log('\n');
//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num

// Old way: Function Declaration
function fizzbuzz(num){
    if (num % 3 === 0 && num % 5 === 0){
       return 'fizzbuzz';
    }else if (num % 3 === 0){
       return 'fizz';
    }else if (num % 5 === 0){
       return 'buzz';
    }else{
       return num;
    }
}
console.log(fizzbuzz(37));
console.log('\n');
//
// ES6 way: Function Expression
const fizzbuzz2 = function(num){
    if (num % 3 === 0 && num % 5 === 0){
       return 'fizzbuzz';
    }else if (num % 3 === 0){
       return 'fizz';
    }else if (num % 5 === 0){
       return 'buzz';
    }else{
       return num;
    }
}
console.log(fizzbuzz2(100));
console.log('\n');
//
//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"


class Animal {
    constructor(species, name) {
      this.species = species;
      this.name = name;
    }
  
    toString() {
      return `${this.name} is a ${this.species}`;
    }
  }
const cat = new Animal('cat', 'Marcus');
console.log(cat.toString());
console.log('\n');

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"

class Dog extends Animal {
    constructor(name, trick) {
      super('dog', name);
      this.trick = trick;
    }
  
    toString() {
      return `${super.toString()} that can ${this.trick}`;
    }
  }
  
  const perro = new Dog('Buddy', 'roll over');
  console.log(perro.toString());