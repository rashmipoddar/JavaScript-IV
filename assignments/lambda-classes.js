// CODE for Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props)
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(props) {
    super(props) 
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach((subject) => console.log(subject))
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props)
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const person1 = new Person({
  name: 'Jack',
  age: 30,
  location:'Oklahama'
});

const person2 = new Person({
  name: 'Jill',
  age: 26,
  location:'Hawaii'
});

const instructor1 = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'A computer program does what you tell it to do, not what you want it to do.'
});

const instructor2 = new Instructor({
  name: 'Jinnie',
  location: 'Brazil',
  age: 38,
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: 'Artificial Intelligence usually beats natural stupidity.'
});

const student1 = new Student ({
  name: 'Maya',
  age: 21,
  location: 'Florida',
  previousBackground: 'Painter',
  className: 'WEB1',
  favSubjects: ['Javascript', 'Python', 'SASS']
});

const student2 = new Student ({
  name: 'Lisa',
  age: 31,
  location: 'Paris',
  previousBackground: 'Accountant',
  className: 'WEB2',
  favSubjects: ['Javascript', 'Node.js', 'CSS']
});

const projectManager1 = new ProjectManager({
  name: 'George',
  location: 'Boston',
  age: 32,
  favLanguage: 'Ruby',
  specialty: 'Back-end',
  catchPhrase: 'A good programmer looks both ways before crossing a one-way street.',
  gradClassName: 'WEB1',
  favInstructor: 'Fred'
});

const projectManager2 = new ProjectManager({
  name: 'Mili',
  location: 'Chicago',
  age: 35,
  favLanguage: 'Javascript',
  specialty: 'React',
  catchPhrase: 'First, solve the problem. Then, write the code.',
  gradClassName: 'WEB2',
  favInstructor: 'Jinnie'
});

console.log(person1.speak());
console.log(person2.speak());
console.log(instructor1.speak());
console.log(instructor2.speak());
console.log(instructor1.demo('Flexbox'));
console.log(instructor2.demo('JavaScript Classes'));
console.log(instructor1.grade(student2, 'Flexbox'));
console.log(instructor2.grade(student1, 'Javascript Prototypes'));
console.log(student1);
console.log(student2);
console.log(student1.speak());
console.log(student2.speak());
student1.listsSubjects();
student2.listsSubjects();
console.log(student1.PRAssignment('CSS'));
console.log(student2.PRAssignment('HTML'));
console.log(student1.sprintChallenge('CSS'));
console.log(student1.sprintChallenge('HTML'));
console.log(projectManager1);
console.log(projectManager2);
console.log(projectManager1.speak());
console.log(projectManager2.speak());
console.log(projectManager1.grade(student2, 'Python'));
console.log(projectManager2.grade(student1, 'Node.js'));
console.log(projectManager1.standUp('WEB1_George'));
console.log(projectManager2.standUp('WEB2_Mili'));
console.log(projectManager1.debugsCode(student1, 'Flexbox'));
console.log(projectManager2.debugsCode(student2, 'JavaScript Function Call'));