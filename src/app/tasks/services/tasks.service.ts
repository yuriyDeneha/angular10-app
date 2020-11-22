import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = [
    {
      title: 'Title 1',
      description:
        'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.Todo,
      duration: 122444,
      start: new Date('Nov 22 2020'),
      end: null,
      progress: 0.25,
      periodId: 1,
    },
    {
      title: 'Title 2',
      description:
        'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.InProgress,
      duration: 422444,
      start: new Date('Nov 24 2020'),
      end: null,
      progress: 0.35,
      periodId: 2,
    },
    {
      title: 'Title 3',
      description:
        'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.InProgress,
      duration: 422444,
      start: new Date('Nov 27 2020'),
      end: null,
      progress: 0.35,
      periodId: 2,
    },
    {
      title: 'Title 4',
      description:
        'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.Validation,
      duration: 422444,
      start: new Date('Nov 27 2020'),
      end: null,
      progress: 0.3,
      periodId: 2,
    },
    {
      title: 'Title 5',
      description:
        'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.Validation,
      duration: 422444,
      start: new Date('Nov 18 2020'),
      end: null,
      progress: 0.3,
      periodId: 3,
    },
    {
      title: 'Title 6',
      description:
        'gds dmsfgnsjgndsj ngdj njsdgn ndsjgnsdjgnsd jgnk sdngknsk ngkd',
      status: Status.Done,
      duration: 422424,
      start: new Date('Nov 22 2020'),
      end: null,
      progress: 0.5,
      periodId: 3,
    },
  ];

  periods: Array<Period> = [
    {
      id: 1,
      title: 'Мінімум: немає болі',
    },
    {
      id: 2,
      title:
        'Задовільна: мязи мають достатню силу, щоб уникнути болей у майбтньому',
    },
    {
      id: 3,
      title:
        'Прекрасний результат: вироблена звичка, мази спини прокачані, прчину не буде проявлятись у майбутньому',
    },
  ];

  constructor() {}
}

export enum Status {
  Todo,
  InProgress,
  Validation,
  Done,
}

export enum Type {
  Task,
  Parent,
}
export interface Period {
  id: number;
  from?: Date;
  to?: Date;
  title: string;
  tasks?: Array<Task>;
}

export interface Task {
  title: string;
  description: string;
  status: Status;
  duration: number;
  start: Date;
  end: Date;
  periodId: number;
  progress: number;
}
