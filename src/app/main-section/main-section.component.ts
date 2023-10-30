import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('0', style({ opacity: 0 })),
      state('1', style({ opacity: 1 })),
      transition('0 => 1', animate('1s')),
    ]),
  ],
})

export class MainSectionComponent {

  number1 = 0;
  number2 =0;

  fadeInState = '0';

  ngOnInit() {
    setTimeout(() => {
      this.fadeInState = '1';
    }, 2000); 

    for (let i = 0; i < 400; i++) {
     setTimeout(()=> {this.number1++},i * 10);
      console.log(this.number1);
  }
    setTimeout(()=>{
      for (let i = 0; i < 21; i++) {
        setTimeout(()=> {this.number2++},i * 50);
        
     }
    },5000)
}

  current_class = 'one';
  isActive = true;

 
  constructor(){
    setInterval(()=>{
     this.isActive = !this.isActive;
    },5000)
   
}
}
