function helloStudent(name='Josue',age=25,country='PE'){
    this.name=name;
    this.age=age;
    this.country=country;

    console.log(name,age,country)
}

helloStudent('Oscar',20,'MX');

// spread operator
const team1=['Maria','Carlos','Enrique'];
const team2=['Josue','Cristhian','Sonia'];

const education=['Mario',...team1,...team2];

console.log(education);


let namePet='Osita';
let race='Mestiza'

const myPet={
    namePet,
    race
}

console.log(myPet)