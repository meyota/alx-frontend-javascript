// -------------- Task 5 ------------

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return ('Working from home');
  }

  getCoffeeBreak() {
    return ('Getting a coffee break');
  }

  workTeacherTasks() {
    return ('Getting to director tasks');
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return ('Cannot work from home');
  }

  getCoffeeBreak() {
    return ('Cannot have a break');
  }

  workTeacherTasks() {
    return ('Getting to work');
  }
}

function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) {
    return (new Teacher());
  }
  return (new Director());
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// -------------- Task 6 ------------

function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

function executeWork (employee: DirectorInterface | TeacherInterface) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks())
  } else {
    console.log(employee.workTeacherTasks());
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
