// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: .split(" ") will seperate the characters including the space and add spaces in between.
// b) Verify and explain: Answer: [ 'Hotel', '2023' ]
// .split(" ") turned the string in the variable into an array. The space in between the words/numbers was the indicator of where the separation goes in the array. In order to get my original answer, the space must be removed like so: .split("")

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, Learn Student!
// b) Verify and explain: Answer: undefined
// undefined was the output because "return" was not placed in the function in order to call the string interpolation when logged.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Answer [11, 13, 15]
// .filter removes the values in the array that does not meet the modulo method of a number having a remainder. Once the code is logged, the array will iterate through the .filter and remove the even numbers.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: Answer: JavaScript
// The code, when logged, outputs JavaScript. The value is found in the myCodingSkills object under the "language" key and the console.log is calling for the value in the "0" index position, which is JavaScript.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: { student: George, cohort: , year: }
// b) Verify and explain: { student: George, cohort: 'Hotel' , year: 2023}
// "Cohort" and "Year" were already defined in the class's constructor, therefore, even though it was not added in the variable "learnStudent" the information was still populated when called in the console.log. 

