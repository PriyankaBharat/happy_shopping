import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { HouseComponent } from './house/house.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  declarations: [AppComponent, WomenComponent, MenComponent, HouseComponent, ElectronicsComponent, HeaderComponent, FooterComponent, CarouselComponent, SidePanelComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
