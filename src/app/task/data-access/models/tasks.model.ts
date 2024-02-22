import {DeepReadonly} from '../../../utils/deep-readonly'

export interface Task {
  id: number
  title: string
  description: string
  assignedDeveloperId: number
  deadline: Date
  status: 'IN_PROGRESS' | 'DONE'
}

export type TaskListDTO = DeepReadonly<{
  tasks: [
    id: number,
    title: string,
    description: string,
    assignedDeveloperId: number,
    deadline: Date,
    status: 'IN_PROGRESS' | 'DONE',
  ]
}>

export interface CreateTask {
  title: string
  description: string
  assignedDeveloperId: number
  deadline: Date
  status: 'IN_PROGRESS' | 'DONE'
}
