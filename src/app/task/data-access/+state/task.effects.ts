import {inject, Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {ApiService} from '../../../core/http/api.service'
import {map, switchMap, tap} from 'rxjs'
import {taskActions} from './task.actions'
import {CreateTask, TaskList} from '../models/tasks.model'
import {Router} from '@angular/router'

@Injectable({providedIn: 'root'})
export class TaskEffects {
  loadAllTasksEffect$ = createEffect(
    (api = inject(ApiService), actions$ = inject(Actions)) =>
      actions$.pipe(
        ofType(taskActions.loadAllTasks),
        switchMap(() =>
          api.get<TaskList[]>('/task/all').pipe(
            map((tasks) => {
              return taskActions.loadAllTasksSuccess({tasks})
            }),
          ),
        ),
      ),
    {functional: true},
  )
  createTaskEffect$ = createEffect(
    (
      api = inject(ApiService),
      actions$ = inject(Actions),
      router = inject(Router),
    ) =>
      actions$.pipe(
        ofType(taskActions.createTask),
        switchMap(({task}) =>
          api.post<void, CreateTask>('/task/create', task).pipe(
            tap(() => {
              router.navigate(['/task'])
            }),
            map(() => taskActions.createTaskSuccess()),
          ),
        ),
      ),
    {functional: true},
  )
}
