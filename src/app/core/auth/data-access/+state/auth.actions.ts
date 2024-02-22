import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {
  LoginPayload,
  RegisterPayload,
  UserWithToken,
} from '../models/sign.model'

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    authSuccess: props<{user: UserWithToken}>(),

    register: props<{req: RegisterPayload}>(),
    login: props<{req: LoginPayload}>(),
    logout: emptyProps(),

    registerFailure: emptyProps(),
    loginFailure: emptyProps(),
  },
})
