import { Component } from '@angular/core';
import { PackageTrakerService } from 'src/app/services/package-traker/package-traker.service';
@Component({
  selector: 'app-dropdown-autosuggest',
  templateUrl: './dropdown-autosuggest.component.html',
  styleUrls: ['./dropdown-autosuggest.component.css'],
})
export class DropdownAutosuggestComponent {
  searchTerm: string = '';
  packageIds: any;
  location_lat: number = 0;
  location_lng: number = 0;

  listeVisible = true;

  selectedOption: string | undefined;

  constructor(private apiService: PackageTrakerService) {}

  onSearchTermChange() {
    this.listeVisible = true;
    this.apiService.searchPackageIds(this.searchTerm).subscribe({
      next: (response) => {
        this.packageIds = response;
        console.log('res', response);
      },
      error: (e) => console.error('e', e),
      complete: () => console.info('complete'),
    });
  }

  selectOption(option: string) {
    console.log('option', option);
    this.selectedOption = option;
    this.listeVisible = false;
  }

  submit() {
    const formData = {
      package_id: this.selectedOption,
      location: {
        lat: this.location_lat,
        lng: this.location_lng,
      },
    };
    console.log('from', formData);

    this.apiService.createDelivery(formData).subscribe({
      next: (v) => console.log('v', v),
      error: (e) => console.error('e', e),
      complete: () => console.info('complete'),
    });
  }
}
