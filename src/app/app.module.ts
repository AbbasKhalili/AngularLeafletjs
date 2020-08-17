import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SelectDateComponent } from './select-date/select-date.component';
import { HasPermissionDirective } from './has-permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SelectDateComponent,
    HasPermissionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPersianDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
