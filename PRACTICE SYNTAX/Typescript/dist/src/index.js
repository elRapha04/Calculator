"use strict";
var Gender;
(function (Gender) {
    Gender["M"] = "Male";
    Gender["F"] = "Female";
})(Gender || (Gender = {}));
let penguin = {
    name: "Gunther",
    age: 3,
    gender: Gender.M,
    speak: () => {
        return "*penguin noises*";
    }
};
console.log(`${penguin.name} is a ${penguin.gender} penguin. He is ${penguin.age} years old. ${penguin.speak()}`);
//# sourceMappingURL=index.js.map