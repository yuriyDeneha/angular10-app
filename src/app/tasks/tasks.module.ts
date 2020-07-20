import { TasksService } from './services/tasks.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [TasksComponent, FilterPipe],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  providers: [
    TasksService
  ],
  exports: [
    FilterPipe
  ]
})
export class TasksModule { }
