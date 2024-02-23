import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {MatTableModule} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {TableModule} from 'primeng/table'
import {ButtonModule} from 'primeng/button'
import {AsyncPipe, NgForOf, NgIf} from '@angular/common'
import {TaskList} from '../../data-access/models/tasks.model'
import {LoadingStatus} from '../../../core/data-access/loading-status.type'

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
    NgIf,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnInit {
  @Input() tasks: TaskList | undefined | null
  @Input() taskStatus!: LoadingStatus
  public first = 0
  public rows = 10

  ngOnInit() {
    console.log(this.tasks)
  }
}
