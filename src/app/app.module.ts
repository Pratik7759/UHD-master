import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DegreesComponent } from './degrees/degrees.component';
import { WhyuhdComponent } from './whyuhd/whyuhd.component';
import { ChooseComponent } from './choose/choose.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent,FormsComponent, FooterComponent, AboutComponent, DegreesComponent, WhyuhdComponent, ChooseComponent, MainfooterComponent ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, BannerComponent, BrowserAnimationsModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
