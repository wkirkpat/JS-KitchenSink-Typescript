let myName: string = "Will";
const numberOfStates: number = 50;
let sum: number = 5 + 4;

function sayHello() {
  window.alert("Hello");
}

sayHello();

function checkAge(userName: string, userAge: number) {
  if (userAge < 21) {
    window.alert(
      "Sorry" +
        " " +
        userName +
        " " +
        "you are not old enough to view this page"
    );
  }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let favoriteVeggies: string[] = ["broccoli", "brussel sprouts", "cauliflower", "squash"];
for (let i of favoriteVeggies) {
  console.log(i);
}

let pet = {
  name: "Gaspode",
  breed: "Wonder Dog",
};

let person1 = {
  name: "Chuy",
  age: 22,
};

let person2 = {
  name: "Ashton",
  age: 19,
};

let person3 = {
  name: "Quinton",
  age: 12,
};

let person4 = {
  name: "Stephen",
  age: 45,
};

let person5 = {
  name: "Joe",
  age: 33,
};

let personArray = [person1, person2, person3, person4, person5];

for (let i = 0; i < 4; i++) {
  checkAge(personArray[i].name, personArray[i].age);
}

function getLength(anyWord: string) {
  return anyWord.length;
}

console.log(getLength("Potato"));

let arrayPeople = [
  {
    name: "Joe",
    age: 33,
  },
  {
    name: "Joe",
    age: 33,
  },
  {
    name: "Joe",
    age: 33,
  },
  {
    name: "Joe",
    age: 33,
  },
  {
    name: "Joe",
    age: 33,
  },
];

