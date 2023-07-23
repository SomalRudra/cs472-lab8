// Exercise 1
String.prototype.filterWords = function(bannedWords) {
    const allWords = this.split(' ');
    console.log(allWords);
    const filteredWords = 
        allWords.filter(word => !bannedWords.includes(word));
    const filteredSentence = filteredWords.join(' ');
    return filteredSentence;
}

var inputStrings = "This is not an input string";
console.log(inputStrings.filterWords(["not"]));


//Exercise 2
Array.prototype.bubbleSort = function() {
    const numbers = this;
    for(let i=0; i<numbers.length; i++){
        let swapped = false;
        for(let j=0; j<numbers.length-i-1; j++){
            if(numbers[j]>numbers[j+1]){
                swapped = true;
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
        if(!swapped) break;
    }
}

const numbers = [23,12,43,22];
numbers.bubbleSort()
console.log(numbers);

// Exercise 3
/*
Create an object called Teacher derived from a Person function constructor, and implement a method called teach that 
receives a string called subject, and prints out: [teacher's name] is now teaching [subject]. Create a Teacher object 
and call its teach method.

Also do the same thing using Object.create. When using Object.create you will need a factory function instead of a 
function constructor in order to pass parameters such as ‘name’ to be set in the prototype.
*/
 //------Function constructor-------
function Person(name){
    this.name = name;
}

const Teacher = new Person("Somal Chakraborty");
Teacher.teach = function(subjectName){
    console.log(`${this.name} is now teaching ${subjectName}`);
}

Teacher.teach('Maths');

// --------- Object.create approach ----------

const person1 = {
    name: 'Somal Chakraborty'
}

const createTeacher = (name) => {
    const teacher1 = Object.create(person1);
    teacher1.name = name;
    teacher1.teach = function(subjectName){
        console.log(`${this.name} is now teaching ${subjectName}`);
    }
    return teacher1;
}

const teacher1 = createTeacher('Rudra Chakraborty');
console.log(teacher1.teach('Maths'));



// //Exercise 4
//-------- Function constructor approach --------
function Person4(name, age) {
    this.name = name;
    this.age = age;

    this.greeting = () => {
        console.log(`Greetings, my name is ${name} and I am ${age} years old`);
    }

    this.salute = () => {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}

const Student = new Person4("Somal Chakraborty", 24);
Student.major = "CSE";
Student.greeting = function() {
    console.log(`Hey! my name is ${this.name} and I am studying for ${this.major}`);
}

console.log(Student.greeting());

const Professor = new Person4("Sami AL Taha", 34)
Professor.department = "CSE";
Professor.salute = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department`)
}

Professor.greeting();
Professor.salute();


// ---------- Object Prototype ------------
const person5 = {
    name: 'demo name',
    age: 45,
    greeting: function() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old`);
    },
    salute: function() {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}

function createStudent(name, age, major) {
    const studentX = Object.create(person5);
    studentX.name = name;
    studentX.age = age;
    studentX.major = major;
    studentX.greeting = function() {
        console.log(`Hey! my name is ${this.name} and I am studying for ${this.major}`);
    }
    return studentX;
}

function createProfessor(name, age, dept) {
    const professor = Object.create(person5);
    professor.name = name;
    professor.age = age;
    professor.department = dept;
    professor.salute = function() {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department`)
    }
    return professor;
}

const student1 = createStudent("Somal Chakraborty", 24, 'CSE');
student1.greeting();
student1.salute();

const professor = createProfessor("Sami AL Taha", 32, 'CSE');
professor.greeting();
professor.salute();
