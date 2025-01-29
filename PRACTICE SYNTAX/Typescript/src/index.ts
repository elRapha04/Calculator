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
*/

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
