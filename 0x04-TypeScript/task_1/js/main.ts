// -----------------Task 1--------------------

interface Teacher {
  [key: string]: any;
  raedonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3)i;

// -----------------Task 2--------------------

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// -----------------Task 3---------------------

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}
function printTeacher(firstName: string, lastName: string): string {
  let firstLetter: string = firstName.charAt(0);
  return(`${firstLetter}.${lastName}`)
}

console.log(printTeacher("John", "Doe"));
