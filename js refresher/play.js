// const name = 'Max';
// let age = 29;
// const hasHobbies = true;

// age = 30;


// const summarizeUser = (userName, userAge, userHasHobby) => {
//     return (
//             'Name is ' + 
//             userName + ', age is ' + 
//             userAge + ' and the user has hobbies: ' + 
//             userHasHobby
//         );
// };

// // const add = (a,b) => a + b;
// // const addOne = a => a + 1;
// const addRandom = () => 1 + 2;

// // console.log(add(1,2));
// // console.log(addOne(1));
// console.log(addRandom());

// console.log(summarizeUser(name, age, hasHobbies));

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

// console.log(person);
// person.greet();

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// hobbies.push('Programming');
// console.log(hobbies);

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));