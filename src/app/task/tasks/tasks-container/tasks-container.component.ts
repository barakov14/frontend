import {Component, inject, OnInit} from '@angular/core'
import {TasksComponent} from '../tasks/tasks.component'
import {TaskFacade} from '../../data-access/task.facade'
import {AsyncPipe} from '@angular/common'
import {TaskCreateButtonComponent} from '../../task-create/task-create-button/task-create-button.component'

@Component({
  selector: 'app-tasks-container',
  standalone: true,
  imports: [TasksComponent, AsyncPipe, TaskCreateButtonComponent],
  templateUrl: './tasks-container.component.html',
  styleUrl: './tasks-container.component.scss',
})
export class TasksContainerComponent implements OnInit {
  private readonly taskFacade = inject(TaskFacade)
  public tasks$ = this.taskFacade.tasks$

  ngOnInit() {
    this.taskFacade.loadTasks()
  }
}
