import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DeliveryComponent } from './page/delivery/delivery.component';
import { PackageComponent } from './page/package/package.component';
import { TrakerComponent } from './page/tracker/traker.component';
import { DriverComponent } from './page/driver/driver.component';

const routes: Routes = [
  { path: 'accueil', component: DashboardComponent },
  { path: 'package', component: PackageComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'traker', component: TrakerComponent },
  { path: 'driver', component: DriverComponent },

  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
