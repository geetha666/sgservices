import { Component } from '@angular/core';


declare const bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  openWhatsAppChat() {
    // Replace '123456789' with the actual phone number you want to chat with
    const phoneNumber = '+15033601459';

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp chat in a new tab
    window.open(whatsappUrl, '_blank');
  }

  ngAfterViewInit() {
    // let navbar:any = document.querySelector('.navbar');
    // new bootstrap.Collapse(navbar.querySelector('.navbar-collapse'));
  }
}
