import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isExpanded = false;

  toggleMenu(){
    console.log("clicked")
     this.isExpanded = !this.isExpanded;
  }

  // nav bar fixing -----------------------------------
  fixed = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.fixed = scrollPosition >= window.innerHeight;
  }
}
