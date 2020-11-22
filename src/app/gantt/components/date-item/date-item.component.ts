import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDateItem } from '@app/game-plan/services/period-management.service';
import { transferArrayItem, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-date-item',
  templateUrl: './date-item.component.html',
  styleUrls: ['./date-item.component.scss']
})
export class DateItemComponent implements OnInit {
  @Input() data: IDateItem;
  @Input() dataItemIndex: number;
  @Input() events: Event[];
  @Output() onRecalculate = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.data.events);
  }

  drop(event: any, newDate: Date) {
    // this.dragging = false;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    console.log(event.currentIndex, event.container.data);
    event.container.data[event.currentIndex].start = newDate;
    this.onRecalculate.emit();
  }
}
