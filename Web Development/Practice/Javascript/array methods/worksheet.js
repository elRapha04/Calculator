const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names

let nameArr = characters.map(
    (char) => {return char.name;}
);

console.log(nameArr);

//2. Get array of all heights

const heights = characters.map((char) => {
    return char.height;
});

console.log(heights);


//3. Get array of objects with just name and height properties

const nameHt = characters.map((char) => {

});

console.log(nameHt);

//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((accumulator, current) => {
    return accumulator + current.mass;
}, 0);
console.log(totalMass);

//2. Get total height of all characters
//3. Get total number of characters by eye color
const eyes = characters.reduce((acc, cur) => {
    if (cur.eye_color === 'blue'){
        ++acc;
    }
    return acc;
}, 0);
console.log(eyes);

//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100

const mass = characters.filter((char) => {
    return char.mass > 100;
});
console.log(mass);


//2. Get characters with height less than 200
//3. Get all male characters
const male = characters.filter((char) => {
    return char.gender == 'male';
});
console.log(male);

//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
