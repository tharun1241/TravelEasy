import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './confirmation/payment/payment.component';
import { TravellersComponent } from './confirmation/travellers/travellers.component';
import { SearchBusesComponent } from './search-buses/search-buses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfirmationComponent,
    PaymentComponent,
    TravellersComponent,
    SearchBusesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
