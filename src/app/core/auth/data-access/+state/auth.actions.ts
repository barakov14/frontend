import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {RegisterPayload, UserWithToken} from '../models/sign.model'

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    authSuccess: props<{user: UserWithToken}>(),

    register: props<{req: RegisterPayload}>(),
    login: emptyProps(),
    logout: emptyProps(),

    registerFailure: emptyProps(),
    loginFailure: emptyProps(),
  },
})
