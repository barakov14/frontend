import {inject, Injectable} from '@angular/core'
import {Store} from '@ngrx/store'
import {authActions} from './+state/auth.actions'
import {LoginPayload, RegisterPayload} from './models/sign.model'

@Injectable({providedIn: 'root'})
export class AuthFacade {
  private readonly store = inject(Store)

  public onRegister(req: RegisterPayload) {
    this.store.dispatch(authActions.register({req}))
  }

  public onLogin(req: LoginPayload) {
    this.store.dispatch(authActions.login({req}))
  }
}
