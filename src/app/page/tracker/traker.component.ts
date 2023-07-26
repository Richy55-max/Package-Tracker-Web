import { Component } from '@angular/core';
import { PackageTrakerService } from 'src/app/services/package-traker/package-traker.service';
@Component({
  selector: 'app-traker',
  templateUrl: './traker.component.html',
  styleUrls: ['./traker.component.css'],
})
export class TrakerComponent {
  submitTitle = 'Traker';
  submitBgColor = '#81ac6e';
  deliveryDetails: any;
  packagesDetails: any;
  packageId: string = '';

  constructor(private myApiService: PackageTrakerService) {}

  fetchPackages(): void {
    console.log(`packageId: ${this.packageId}`);
    this.myApiService
      .fetchPackagesById(this.packageId)
      .subscribe((response) => {
        this.packagesDetails = response;
        console.log('response', response);
      });
  }
}
