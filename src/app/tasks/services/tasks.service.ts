import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = [
    {
      title: 'Title 1',
      description: 'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.Todo,
      duration: 122444,
      start: new Date(),
      end: null,
      progress: 0.25,
    },
    {
      title: 'Title 2',
      description: 'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.InProgress,
      duration: 422444,
      start: new Date(),
      end: null,
      progress: 0.35,
    },
    {
      title: 'Title 3',
      description: 'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.InProgress,
      duration: 422444,
      start: new Date(),
      end: null,
      progress: 0.35,
    },
    {
      title: 'Title 4',
      description: 'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.Validation,
      duration: 422444,
      start: new Date(),
      end: null,
      progress: 0.3,
    },
    {
      title: 'Title 5',
      description: 'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.Validation,
      duration: 422444,
      start: new Date(),
      end: null,
      progress: 0.3,
    },
    {
      title: 'Title 6',
      description: 'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.Done,
      duration: 422424,
      start: new Date(),
      end: null,
      progress: 0.5,
    },
  ];

  constructor() { }
}

export enum Status {
  Todo,
  InProgress,
  Validation,
  Done
}

export enum Type {
  Task,
  Parent
}

export interface Task {
  title: string;
  description: string;
  status: Status;
  duration: number;
  start: Date;
  end: Date;
  progress: number;
}
