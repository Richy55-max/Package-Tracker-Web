import { Component } from '@angular/core';
import { PackageTrakerService } from 'src/app/services/package-traker/package-traker.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent {
  submitTitle = 'Submit';
  actionsButtons: Array<any> = [
    { title: 'Picked Up', bg: '#6fa8dc' },
    { title: 'In-Transit', bg: '#ff9900' },
    { title: 'Delivered', bg: '#6aa74f' },
    { title: 'Failed', bg: '#e06666' },
  ];
  submitBgColor = '#81ac6e';
  deliveryId: string = '';
  deliveryDetails: any;

  constructor(private myApiService: PackageTrakerService) {}

  fetchDelivery(): void {
    console.log(`deleveryId: ${this.deliveryId}`);
    this.myApiService
      .fetchDeveleriesById(this.deliveryId)
      .subscribe((response) => {
        this.deliveryDetails = response;
        console.log('res', response);
      });
  }
}
