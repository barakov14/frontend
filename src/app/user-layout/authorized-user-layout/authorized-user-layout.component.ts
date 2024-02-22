import {Component} from '@angular/core'
import {FooterComponent} from '../../core/layout/footer/footer.component'
import {HeaderComponent} from '../../core/layout/header/header.component'
import {InvitationContainerComponent} from '../../invitation/invitation-container/invitation-container.component'
import {RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-authorized-user-layout',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    InvitationContainerComponent,
    RouterOutlet,
  ],
  templateUrl: './authorized-user-layout.component.html',
  styleUrl: './authorized-user-layout.component.scss',
})
export class AuthorizedUserLayoutComponent {}
