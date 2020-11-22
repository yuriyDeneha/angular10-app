import { Injectable } from '@angular/core';
import { Task } from 'src/app/tasks/services/tasks.service';

@Injectable({
  providedIn: 'root',
})
export class PeriodManagementService {
  constructor() {}

  getDateItem(from: Date = new Date()): IDateItem {
    const nextDate = new Date(from);
    nextDate.setDate(nextDate.getDate() + 1);
    const now = new Date();
    return {
      date: nextDate,
      type: DateType.day,
      duration: 24,
      state: {
        isToday: nextDate.toDateString() === now.toDateString(),
        isPast: nextDate < now,
        isFuture: nextDate > now,
      },
      tasks: [],
    };
  }
}

export interface IDateItem {
  date: Date;
  type: DateType;
  duration: number; // miliseconds
  tasks?: Task[]; // miliseconds
  state?: {
    isToday: boolean;
    isPast: boolean;
    isFuture: boolean;
  };
}

export type DateItems = IDateItem[];

export enum DateType {
  hour = 'hour',
  day = 'day',
  week = 'week',
  month = 'month',
  queter = 'queter',
  year = 'year',
}
