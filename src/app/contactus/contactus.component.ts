import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  geethaform :any= FormGroup
  constructor(public formbuilder:FormBuilder) {
    this.geethaform = formbuilder.group(
      {name :['', Validators.required ],
       email :new FormControl('', 
    Validators.compose( [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required])),
       phone : ['', Validators.required ],
       msg : ['', Validators.required ],

      })
   }
   async formsec(){
     emailjs.init('MLQ-OW2-VOucrGr8d')
     await emailjs.send("service_wayxalz","template_w05q1gy",{
      to_name: "SG Services",
      name: this.geethaform.value.name,
      email: this.geethaform.value.email,
      sub:  this.geethaform.value.phone,
      msg:  this.geethaform.value.msg,
      }) .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.geethaform.reset()
        alert("Request Sent Successfully")
      }, (error) => {
        console.log(error.text);
      });;
       }

  ngOnInit() {
  }

}


