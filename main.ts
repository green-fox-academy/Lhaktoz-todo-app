'use strict';

import { Task } from './Task';
import { List } from './List';

const fs = require('fs');
let fileContent = fs.readFileSync('tasks.txt', 'utf-8');


let taskArray =  fileContent.split('\r\n')


let tasksList = new List();
let tasks: Task[] = initializeTask();


function initializeTask(): Task[] {
  let newArrey = [];
  for ( let i = 0; i < taskArray.length; i++){
    newArrey.push(new Task (taskArray[i]))
  }
  return newArrey;
}
console.log(taskArray.length)
console.log(tasks)

// for (let i = 0; i < listOfTasks.length ; i++) {
//   todoList.add(listOfTasks[i])
// }

// list.printAll();
// console.log(list.getTasks()[2].getName())


// console.log(process.argv);

// if(process.argv[2] === '-l') {
//   console.log(

//   );
// } else {
//   console.log(`$ todo \r\nCommand Line Todo applicaton\r\n=============================\r\n\r\nCommand line arguments:\r\n-l   Lists all the tasks\r\n-a   Adds a new task\r\n-r   Removes an task\r\n-c   Completes an task`);
//   }

  
