import { IndexComponent } from './components/index/index.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttRoutingModule } from './gantt-routing.module';
import { GanttComponent } from './gantt.component';
import { MaterialModule } from '../modules/material.module';

@NgModule({
  declarations: [IndexComponent, GanttComponent],
  imports: [
    CommonModule,
    GanttRoutingModule,
    MaterialModule,
    InfiniteScrollModule,
  ],
})
export class GanttModule {}
