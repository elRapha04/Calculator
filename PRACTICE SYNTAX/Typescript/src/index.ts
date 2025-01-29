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

function getAge(age: number): string{
  if (age < 18){
    return "You're below 18 years old!"
  }
  else{
    return "You're beyond 18 years old!"
  }
}

console.log(getAge(3));