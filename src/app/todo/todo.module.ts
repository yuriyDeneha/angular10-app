import { MaterialModule } from './../modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TasksModule } from '../tasks/tasks.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, TodoRoutingModule, MaterialModule, TasksModule],
})
export class TodoModule {}
