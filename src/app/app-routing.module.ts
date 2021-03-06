import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MapComponent } from './map/map.component';
import { SelectDateComponent } from './select-date/select-date.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';
import { HasPermissionGuard } from './has-permission.guard';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'map', component: MapComponent, canActivate: [HasPermissionGuard], },
  { path: 'datepicker', component: SelectDateComponent },
  //{ path: '**', component: PageNotFoundComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },

  {
    path: 'mapPreLoad',
    component: MapComponent,
    resolve: {
      crisis: CrisisDetailResolverService
    }
  }
];

@NgModule({
  //توی تعیین استراتژی لوود میشه تنظیم کرد که ماژولها همگی لوود بشن به صورت پست صحنه
  //imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  //اما وقتی تعیین نمیشه به صورت lazy loading ماژولها لوود میشود
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
