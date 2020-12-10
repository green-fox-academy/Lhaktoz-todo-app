'use strict';

export class Task {
  protected _name: string;
  // protected _completed: boolean;

  constructor(name: string){
    this._name = name;
    // this._completed = false;
  }

  // public complete(): void {
  //   this._completed = true;
  // }

  getName(): string {
    return this._name;
  }

  // getCompleted(): boolean {
  //   return this._completed;
  // }


}