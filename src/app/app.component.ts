import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'web-dev-tester';
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor( private sidenavService: SidenavService) {}

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
