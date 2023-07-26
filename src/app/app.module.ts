import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Importez le module FormsModule ici

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PackageComponent } from './page/package/package.component';
import { DeliveryComponent } from './page/delivery/delivery.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { TrakerComponent } from './page/tracker/traker.component';
import { ButtonComponent } from './components/button/button.component';
import { DriverComponent } from './page/driver/driver.component';
import { HttpClientModule } from '@angular/common/http';
import { PackageDetailsComponent } from './components/package-details/package-details.component';
import { DeliveryDetailsComponent } from './components/delivery-details/delivery-details.component';
import { DropdownAutosuggestComponent } from './components/dropdown-autosuggest/dropdown-autosuggest.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    PackageComponent,
    DeliveryComponent,
    HamburgerMenuComponent,
    TrakerComponent,
    ButtonComponent,
    DriverComponent,
    PackageDetailsComponent,
    DeliveryDetailsComponent,
    DropdownAutosuggestComponent,
    MapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
