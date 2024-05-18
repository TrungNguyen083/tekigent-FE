import { Component } from '@angular/core';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss'],
  standalone: true,
  imports: [AppTopbarModule]
})
export class CredentialComponent {

}
