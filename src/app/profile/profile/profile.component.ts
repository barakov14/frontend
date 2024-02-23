import {Component, inject} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {selectUser} from '../../core/auth/data-access/+state/auth.selectors'
import {AsyncPipe, NgIf} from '@angular/common'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  private readonly store = inject(Store)
  public user = this.store.pipe(select(selectUser))
}
