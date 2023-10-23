import { Component } from '@angular/core';


declare const bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ngAfterViewInit() {
    let navbar:any = document.querySelector('.navbar');
    new bootstrap.Collapse(navbar.querySelector('.navbar-collapse'));
  }
}
