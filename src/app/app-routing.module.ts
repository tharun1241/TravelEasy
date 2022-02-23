import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HeaderComponent } from './header/header.component';
import { SearchBusesComponent } from './search-buses/search-buses.component';

const routes: Routes = [
  {
    path : '', component : SearchBusesComponent},
    {
    path : 'confirmation' , component : ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
