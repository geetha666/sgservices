import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {

constructor(public meta:Meta){
  
  this.meta.updateTag({ name: 'description', content: "At Soft Genic, we are passionate about the digital world and dedicated to crafting exceptional web experiences. We are a team of skilled and creative web developers who thrive on turning your ideas into functional, visually stunning, and user-friendly websites." });
this.meta.updateTag({ property: 'og:title', content: "About Us" });


}

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
