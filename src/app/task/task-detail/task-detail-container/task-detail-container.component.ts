import {Component} from '@angular/core'
import {TaskDetailComponent} from '../task-detail/task-detail.component'

@Component({
  selector: 'app-task-detail-container',
  standalone: true,
  imports: [TaskDetailComponent],
  templateUrl: './task-detail-container.component.html',
  styleUrl: './task-detail-container.component.scss',
})
export class TaskDetailContainerComponent {}
