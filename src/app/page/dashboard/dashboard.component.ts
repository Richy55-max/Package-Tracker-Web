import { Component, OnInit } from '@angular/core';
import { SelectedItemService } from '../../services/selected-item/selected-item.service';
import { PackageTrakerService } from 'src/app/services/package-traker/package-traker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allPackages: any;
  allDeliveries: any;
  constructor(
    private selectedItemService: SelectedItemService,
    private myApiService: PackageTrakerService
  ) {}

  ngOnInit(): void {
    this.myApiService.fetchPackages().subscribe((response) => {
      this.allPackages = response;
    });

    this.myApiService.fetchDelivery().subscribe((response) => {
      console.log('res', response);
      this.allDeliveries = response;
    });
  }
  // Mettez à jour l'élément sélectionné lors de la redirection
  changeItem(item: string): void {
    this.selectedItemService.setSelectedItem(item);
  }
}
