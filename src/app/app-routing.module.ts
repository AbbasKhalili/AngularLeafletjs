import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { SelectDateComponent } from './select-date/select-date.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'datepicker', component: SelectDateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
