import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { AboutusSectionComponent } from './aboutus-section/aboutus-section.component';
import { OurWorksSectionComponent } from './our-works-section/our-works-section.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { SwiperComponent } from './swiper/swiper.component';
// register Swiper custom elements
//------------------------------
import { AlertModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GetStartedComponent } from './get-started/get-started.component';
import { RecentBlogComponent } from './recent-blog/recent-blog.component';
import { FotterComponent } from './fotter/fotter.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

register();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    AboutusSectionComponent,
    OurWorksSectionComponent,
    TestimonialComponent,
    SwiperComponent,
    GetStartedComponent,
    RecentBlogComponent,
    FotterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
