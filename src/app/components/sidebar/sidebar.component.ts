import { Component } from '@angular/core';
import { SelectedItemService } from '../../services/selected-item/selected-item.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menuItems: string[] = ['Accueil', 'Package', 'Delivery', 'Traker', 'Driver'];

  constructor(public selectedItemService: SelectedItemService) {}

  onSelectMenuItem(item: string): void {
    this.selectedItemService.setSelectedItem(item);
  }
}
