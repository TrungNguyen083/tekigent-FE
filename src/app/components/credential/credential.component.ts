import { Component } from '@angular/core';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { CredentialListComponent } from './component/credential-list/credential-list.component';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss'],
  standalone: true,
  imports: [AppTopbarModule, CredentialListComponent]
})
export class CredentialComponent {

}
