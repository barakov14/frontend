import {Routes} from '@angular/router'
import {AuthorizedUserLayoutComponent} from './user-layout/authorized-user-layout/authorized-user-layout.component'
import {authGuard} from './core/auth/data-access/services/auth.guard'

export const routes: Routes = [
  {
    path: '',
    component: AuthorizedUserLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'task',
        loadComponent: () =>
          import('./task/tasks/tasks-container/tasks-container.component').then(
            (c) => c.TasksContainerComponent,
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import(
            './profile/profile-container/profile-container.component'
          ).then((c) => c.ProfileContainerComponent),
      },
      {
        path: 'task-editor',
        loadComponent: () =>
          import(
            './task/task-create/task-create-container/task-create-container.component'
          ).then((c) => c.TaskCreateContainerComponent),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import(
        './core/auth/feature-login/login-container/login-container.component'
      ).then((c) => c.LoginContainerComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import(
        './core/auth/feature-register/register-container/register-container.component'
      ).then((c) => c.RegisterContainerComponent),
  },
]
