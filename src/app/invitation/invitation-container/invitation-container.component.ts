import {Component} from '@angular/core'
import {InvitationComponent} from '../invitation/invitation.component'

@Component({
  selector: 'app-invitation-container',
  standalone: true,
  imports: [InvitationComponent],
  templateUrl: './invitation-container.component.html',
  styleUrl: './invitation-container.component.scss',
})
export class InvitationContainerComponent {
  onGetInvitationCode(invitation: string) {}
}
