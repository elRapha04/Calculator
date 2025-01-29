/*
// ENUM
enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;

console.log(mySize);
*/

/*
//FUNCTION
function getAge(age: number): string{
  if (age < 18){
    return "You're below 18 years old!"
  }
  else{
    return "You're beyond 18 years old!"
  }
}

console.log(getAge(3));
*/

/*
//OBJECT
enum Gender {
  M = "Male",
  F = "Female",
}

let penguin: {
  name: string,
  age: number,
  gender: Gender,
  speak: () => string
} = {
  name: "Gunther", 
  age: 3, 
  gender: Gender.M, 
  speak: () => {
    return "*penguin noises*"
  }
};

console.log(`${penguin.name} is a ${penguin.gender} penguin. He is ${penguin.age} years old. ${penguin.speak()}`)
*/

/*
//TYPE ALIASING
enum Gender {
  M = "Male",
  F = "Female",
}

// use type keyword then PascalCase
type Penguin = {
  name: string,
  age: number,
  gender: Gender,
  speak: () => string
}

let penguin: Penguin = {
  name: "Gunther", 
  age: 3, 
  gender: Gender.M, 
  speak: () => {
    return "*penguin noises*"
  }
};

console.log(`${penguin.name} is a ${penguin.gender} penguin. He is ${penguin.age} years old. ${penguin.speak()}`)
*/
/*
//OPTIONAL [property/element/call] ACCESS OPERATOR "?."
type Customer = {
  date: Date
}

function getCustomer(id: number): Customer | null {
  return id !== 0 ? {date: new Date()} : null;
}

let customer1 = getCustomer(0)
console.log(customer1?.date);
*/
