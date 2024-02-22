import {ChangeDetectionStrategy, Component} from '@angular/core'
import {TaskCreateUiComponent} from '../task-create-ui/task-create-ui.component'

@Component({
  selector: 'app-task-create-container',
  standalone: true,
  imports: [TaskCreateUiComponent],
  templateUrl: './task-create-container.component.html',
  styleUrl: './task-create-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreateContainerComponent {}
