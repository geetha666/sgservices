import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit   {
  test : Date = new Date();

  constructor(public sanitizer:DomSanitizer){

  }
  ngOnInit() {

  }
  sathizie(url:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

}
