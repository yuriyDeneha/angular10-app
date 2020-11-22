import {
  Period,
  Status,
  Task,
  TasksService,
} from './../../../tasks/services/tasks.service';
import {
  PeriodManagementService,
  DateItems,
  IDateItem,
} from './../../services/period-management.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import * as moment from 'moment';
import {
  moveItemInArray,
  transferArrayItem,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
  @ViewChild('calendar') calendar: ElementRef;

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  HEIGHT_WEEK = 392;
  direction = '';

  initAmount = 18;
  step = 2;
  defaultDate: Date;
  now = new Date();
  Status = Status;

  dateItems: DateItems = [];
  tasks: any = [];
  periods: Array<Period>;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private tasksService: TasksService,
    private periodManagementService: PeriodManagementService
  ) {}

  ngOnInit() {
    // this.setQueryParamsListener();
    // this.getEntityId();
    // this.subscribeOnSelectionChanges();
    this.initPeriodView();
    console.log(this.dateItems);
    this.setup();
  }

  setup() {
    console.log(this.tasksService.periods);
    this.periods = this.tasksService.periods;
    this.tasksService.tasks.forEach((task: Task) => {
      this.periods.forEach((period: Period) => {
        if (period.id === task.periodId) {
          if (!period.tasks) {
            period.tasks = [];
          }
          period.tasks.push(task);
        }
      });
    });
  }

  initPeriodView(): void {
    this.addItems(this.initAmount);
  }

  addItems(amount: number = this.step, fromDate: Date = new Date()) {
    // let nextWeekIndex = this.weeks.length ? this.weeks[0].weekIndex - 1 : -1;
    let method = 'unshift';
    // const currentWeekAmount = this.weeks.length;

    // if (this.direction === 'down') {
    //   nextWeekIndex = this.weeks[currentWeekAmount - 1].weekIndex + 1;
    // }
    if (this.direction === 'down' || this.direction === 'init') {
      method = 'push';
    }
    const dataItemsAmount = this.dateItems.length;
    let previousDate: Date = dataItemsAmount
      ? this.dateItems[dataItemsAmount - 1].date
      : new Date('Nov 14, 2020');

    for (let index = 0; index < amount; ++index) {
      const dateItem = this.periodManagementService.getDateItem(previousDate);
      this.getDateItemEvents(dateItem);
      previousDate = dateItem.date;
      this.dateItems.push(dateItem);
    }
    // const start = this.weeks[0].days[0].fullDate;
    // const end = this.weeks[this.weeks.length - 1].days[6].fullDate;
    // this.router.navigate([], {
    //   queryParams: {
    //     start: this.shared.dateToQueryParam(start),
    //     end: this.shared.dateToQueryParam(end)
    //   },
    //   queryParamsHandling: 'merge'
    // });
    // this.changeDetectorRef.detectChanges();
  }

  getDateItemEvents(item: IDateItem) {
    const from = new Date(item.date);
    const to = new Date(from);
    to.setHours(23);
    to.setMinutes(59);
    from.setHours(0);
    from.setMinutes(0);

    /// TODO add events
    const tasks: Array<Task> = this.getTasksByDate(
      from,
      to,
      this.tasksService.tasks
    );
    this.tasks.push(...tasks);
    if (!item.tasks) {
      item.tasks = [];
    }
    item.tasks.push(...tasks);
    // this.recalculateOffset();
    // this.changeDetectorRef.detectChanges();
  }

  getTasksByDate(from: Date, to: Date, tasks: Array<Task>) {
    // console.log('from', new Date(from));
    // console.log('to', new Date(to));
    return tasks.filter((task: Task) => {
      return (
        (task.start.getTime() < to.getTime() ||
          task.start.getTime() === to.getTime()) &&
        (task.start.getTime() > from.getTime() ||
          task.start.getTime() === from.getTime())
      );
    });
  }

  recalculateOffset() {
    const events: any = [];
    this.dateItems.forEach((dateItem: IDateItem) => {
      events.push(...dateItem.tasks);
    });
    events.sort((a: any, b: any) => {
      return a.start - b.start;
    });

    events.forEach((event: any, index: number) => {
      event.progress = Math.floor(Math.random() * 100 + 1);
      event.order = index;
    });
  }

  droped(event: CdkDragDrop<string[]>, dataItem: IDateItem) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const task = dataItem.tasks[event.currentIndex];
      task.start = dataItem.date;
    }
  }
}
