import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {MatTableModule} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {TableModule} from 'primeng/table'
import {ButtonModule} from 'primeng/button'
import {AsyncPipe, NgForOf} from '@angular/common'
import {TaskListDTO} from '../../data-access/models/tasks.model'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginator,
    TableModule,
    ButtonModule,
    AsyncPipe,
    NgForOf,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  @Input() tasks: TaskListDTO | undefined | null
  public first = 0
  public rows = 10
}
