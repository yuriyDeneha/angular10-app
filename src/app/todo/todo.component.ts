import { TasksService, Status } from './../tasks/services/tasks.service';
import { Component, OnInit } from '@angular/core';
import {
  moveItemInArray,
  transferArrayItem,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  Status = Status;
  lists: any = {};
  columns = this.enumToArray(Status);

  statusTranslates = {
    Todo: 'Треба виконати 🔜',
    InProgress: 'Виконую 🔥',
    Validation: 'Треба б перевірити 🔄',
    Done: 'Зроблено! ✅',
  };

  constructor(public tasksService: TasksService) {}

  ngOnInit() {
    this.setup();
  }

  setup() {
    this.tasksService.tasks.forEach((task: any) => {
      if (!this.lists[Status[task.status]]) {
        this.lists[Status[task.status]] = [];
      }
      this.lists[Status[task.status]].push(task);
    });
  }

  enumToArray(enumType: any) {
    const stringIsNumber = (value) => isNaN(Number(value)) === false;

    return Object.keys(enumType)
      .filter(stringIsNumber)
      .map((key) => enumType[key]);
  }

  drop(event: CdkDragDrop<string[]>, column: string) {
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
      const item = this.lists[column][event.currentIndex];
      item.status = Status[column];
    }
  }
}
