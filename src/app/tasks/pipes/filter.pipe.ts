import { Pipe, PipeTransform } from '@angular/core';
import { Status, Task } from '../services/tasks.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Task[], status: Status): unknown {
    return tasks.filter((task: Task) => task.status === status);
  }
}
