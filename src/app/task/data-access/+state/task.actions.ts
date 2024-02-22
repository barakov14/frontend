import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {CreateTask, TaskList} from '../models/tasks.model'

export const taskActions = createActionGroup({
  source: 'Task',
  events: {
    loadAllTasks: emptyProps(),
    loadAllTasksSuccess: props<{tasks: TaskList[]}>(),

    createTask: props<{task: CreateTask}>(),
    createTaskSuccess: emptyProps(),
  },
})
