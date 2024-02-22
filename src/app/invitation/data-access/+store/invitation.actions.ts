import {createActionGroup, props} from '@ngrx/store'

export const taskActions = createActionGroup({
  source: 'Invitation',
  events: {
    getInvitationCode: props<{role: string}>(),
  },
})
