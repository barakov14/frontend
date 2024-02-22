export interface Task {
  id: number
  title: string
  description: string
  assignedDeveloperId: number
  deadline: Date
  status: 'NEW' | 'IN_PROGRESS' | 'DONE'
}

export interface TaskList {
  tasks: Task[]
}

export interface CreateTask {
  title: string
  description: string
  assignedDeveloperId: number
  deadline: Date
  status: 'NEW' | 'IN_PROGRESS' | 'DONE'
}
