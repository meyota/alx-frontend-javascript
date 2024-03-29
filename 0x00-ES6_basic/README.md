# 0x00. ES6 Basics
### Concepts

_For this project, we expect you to look at these concepts:_

-   [Modern Javascript](https://intranet.alxswe.com/concepts/541)
-   [Software Linter](https://intranet.alxswe.com/concepts/542)
- ## Resources

**Read or watch**:

-   [ECMAScript 6 - ECMAScript 2015](https://intranet.alxswe.com/rltoken/HRvh-7X2k2JmPu2XMuvlnQ "ECMAScript 6 - ECMAScript 2015")
-   [Statements and declarations](https://intranet.alxswe.com/rltoken/bu6OK8Wbzzxr04Si-qup-w "Statements and declarations")
-   [Arrow functions](https://intranet.alxswe.com/rltoken/kn70en_i7XsVl9PUhAK1fQ "Arrow functions")
-   [Default parameters](https://intranet.alxswe.com/rltoken/e1-hBHivLFWOip87Lc4Jfw "Default parameters")
-   [Rest parameter](https://intranet.alxswe.com/rltoken/TB_tbhDM8tPkVIS4_Tw_rw "Rest parameter")
-   [Javascript ES6 — Iterables and Iterators](https://intranet.alxswe.com/rltoken/CLBpvEacWzjGB4xr4SjX4g "Javascript ES6 — Iterables and Iterators")

## Learning Objectives

At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.alxswe.com/rltoken/TyqtB2dhm7oqGWD-ZNvFxw "explain to anyone"),  **without the help of Google**:

-   What ES6 is
-   New features introduced in ES6
-   The difference between a constant and a variable
-   Block-scoped variables
-   Arrow functions and function parameters default to them
-   Rest and spread function parameters
-   String templating in ES6
-   Object creation and their properties in ES6
-   Iterators and for-of loops

## Requirements

### General

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors:  `vi`,  `vim`,  `emacs`,  `Visual Studio Code`
-   All your files should end with a new line
-   A  `README.md`  file, at the root of the folder of the project, is mandatory
-   Your code should use the  `js`  extension
-   Your code will be tested using the  [Jest Testing Framework](https://intranet.alxswe.com/rltoken/K0bBQgH1IKAABeUzTmzxAA "Jest Testing Framework")
-   Your code will be analyzed using the linter  [ESLint](https://intranet.alxswe.com/rltoken/iKElBm_Xlj10nllm5OILKA "ESLint")  along with specific rules that we’ll provide
-   All of your functions must be exported

## Setup

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

```

### Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied  `package.json`  and run  `npm install`.

## Configuration files

Add the files below to your project directory

### `package.json`

Click to show/hide file contents

### `babel.config.js`

Click to show/hide file contents

### `.eslintrc.js`

Click to show/hide file contents

### Finally…

Don’t forget to run  `npm install`  from the terminal of your project folder to install all necessary project dependencies.

## Tasks

### 0. Const or let?



Modify

-   function  `taskFirst`  to instantiate variables using  `const`
-   function  `taskNext`  to instantiate variables using  `let`

Explain

`export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}` 

Execution example:

Explain

``bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$`` 



### 1. Block Scope



Given what you’ve read about  `var`  and hoisting, modify the variables inside the function  `taskBlock`  so that the variables aren’t overwritten inside the conditional block.

Explain

`export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}` 

Execution:

Explain

`bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$` 



### 2. Arrow functions



Rewrite the following standard function to use ES6’s arrow syntax of the function  `add`  (it will be an anonymous function after)

Explain

`export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}` 

Execution:

Explain

`bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$` 



### 3. Parameter defaults



Condense the internals of the following function to 1 line - without changing the name of each function/variable.

_Hint:_  The key here to define default parameter values for the function parameters.

Explain

`export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}` 

Execution:

Explain

`bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$` 



### 4. Rest parameter syntax for functions



Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```
export default function returnHowManyArguments() {

}

```

Example:

```
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>

```

Execution:

Explain

`bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$` 



### 5. The wonders of spread syntax



Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

```
export default function concatArrays(array1, array2, string) {
}

```

Execution:

Explain

`bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$` 



### 6. Take advantage of template literals



Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

Explain

`export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}` 

Execution:

Explain

`bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$` 



### 7. Object property value shorthand syntax



Notice how the keys and the variable names are the same?

Modify the following function’s  `budget`  object to simply use the keyname instead.

Explain

`export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}` 

Execution:

Explain

`bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$` 



### 8. No need to create empty objects before adding in properties



Rewrite the  `getBudgetForCurrentYear`  function to use ES6 computed property names on the  `budget`  object

Explain

``function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}`` 

Execution:

Explain

`bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$` 



### 9. ES6 method properties



Rewrite  `getFullBudgetObject`  to use ES6 method properties in the  `fullBudget`  object

Explain

``import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}`` 

Execution:

Explain

`bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js 
$20
20 euros
bob@dylan:~$` 



### 10. For...of Loops



Rewrite the function  `appendToEachArrayValue`  to use ES6’s  `for...of`  operator. And don’t forget that  `var`  is not ES6-friendly.

Explain

`export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}` 

Execution:

Explain

`bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$` 



### 11. Iterator



Write a function named  `createEmployeesObject`  that will receive two arguments:

-   `departmentName`  (String)
-   `employees`  (Array of Strings)

```
export default function createEmployeesObject(departmentName, employees) {

}

```

The function should return an object with the following format:

```
{
     $departmentName: [
          $employees,
     ],
}

```

Execution:

Explain

`bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$` 



### 12. Let's create a report object



Write a function named  `createReportObject`  whose parameter,  `employeesList`, is the return value of the previous function  `createEmployeesObject`.

```
export default function createReportObject(employeesList) {

}

```

`createReportObject`  should return an object containing the key  `allEmployees`  and a method property called  `getNumberOfDepartments`.

`allEmployees`  is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives  `employeesList`  and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

Explain

`{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};` 

Execution:

Explain

`bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$` 



### 13. Iterating through report objects



Write a function named  `createIteratorObject`, that will take into argument a report Object created with the previous function  `createReportObject`.

This function will return an iterator to go through every employee in every department.

```
export default function createIteratorObject(report) {

}

```

Execution:

Explain

`bob@dylan:~$ cat 100-main.js
import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js 
Bob
Jane
Sylvie
bob@dylan:~$` 



### 14. Iterate through object



Finally, write a function named  `iterateThroughObject`. The function’s parameter  `reportWithIterator`  is the return value from  `createIteratorObject`.

```
 export default function iterateThroughObject(reportWithIterator) {

 }

```

It should return every employee name in a string, separated by  `|`

Explain

`{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};` 

Should return  `John Doe | Guillaume Salva`

Reminder - the functions will be  _imported_  by the test suite.

Full example:

Explain

`> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
>` 

Execution:

Explain

`bob@dylan:~$ cat 101-main.js
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js 
Bob | Jane | Sylvie
bob@dylan:~$`
