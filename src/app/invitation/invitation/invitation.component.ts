import {Component} from '@angular/core'
import {
  MatFormField,
  MatLabel,
  MatOption,
  MatSelect,
} from '@angular/material/select'
import {MatButton} from '@angular/material/button'
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [
    MatSelect,
    MatOption,
    MatButton,
    MatLabel,
    MatFormField,
    ReactiveFormsModule,
  ],
  templateUrl: './invitation.component.html',
  styleUrl: './invitation.component.scss',
})
export class InvitationComponent {
  public formGroup = new FormBuilder().group({
    position: new FormControl('', Validators.required),
  })

  onGetInvitationCode() {
    console.log(this.formGroup.getRawValue())
  }
}
