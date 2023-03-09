import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/dialogs/login/login.component';
import { LoginService } from 'src/app/services/login.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private sidenavService: SidenavService,
    private dialog: MatDialog,
    public loginService: LoginService
  ) {}

  toggle = () => this.sidenavService.toggle();

  login() {
    this.dialog.open(LoginComponent, {
      width: '400px',
      height: '400px'
    })
  }
}
