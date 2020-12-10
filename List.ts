'use strict';

import { Task } from './Task'

export class List {
  protected _tasks: Task[];

  constructor() {
    this._tasks = [];
  }

  public add(task: Task): void {
    this._tasks.push(task);
  }

  public getTasks(): Task[] {
    return this._tasks;
  }

  public toString(): string {
    return this._tasks
      .map((task, index) => `${index + 1} - ${task.toString()}`)
      .join('\r\n');
  }

  public printAll() {
    for (let i = 0; i < this._tasks.length ; i++) {
      console.log(`${i + 1} - ${this._tasks[i].getName()}`);
      
    }
    // console.log(list.getTasks()[2].getName())
  }


}