import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectCountryComponent } from './components/select-country/select-country.component';
import { UniListComponent } from './components/uni-list/uni-list.component';
import { UniDetailsComponent } from './components/uni-details/uni-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCountryComponent,
    UniListComponent,
    UniDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
