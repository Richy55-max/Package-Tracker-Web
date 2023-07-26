import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PackageTrakerService } from 'src/app/services/package-traker/package-traker.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
})
export class PackageComponent {
  description: string = '';
  weight: number = 0;
  width: number = 0;
  height: number = 0;
  depth: number = 0;
  from_name: string = '';
  from_address: string = '';
  from_location_lat: number = 0;
  from_location_lng: number = 0;
  to_name: string = '';
  to_address: string = '';
  to_location_lat: number = 0;
  to_location_lng: number = 0;
  from_location: { lat: number; lng: number } = { lat: 0, lng: 0 };
  to_location: { lat: number; lng: number } = { lat: 0, lng: 0 };

  constructor(private myApiService: PackageTrakerService) {}

  ngOnInit() {
    this.from_location_lat = this.from_location?.lat;
    this.from_location_lng = this.from_location?.lng;
    this.to_location_lat = this.to_location?.lat;
    this.to_location_lng = this.to_location?.lng;
  }

  // disabled: boolean = false;
  submitTitle = 'Submit';
  submitBgColor = '#81ac6e';

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {
        description: this.description,
        weight: this.weight,
        width: this.width,
        height: this.height,
        depth: this.depth,
        from_name: this.from_name,
        from_address: this.from_address,
        from_location: {
          lat: this.from_location_lat,
          lng: this.from_location_lng,
        },
        to_name: this.to_name,
        to_address: this.to_address,
        to_location: {
          lat: this.to_location_lat,
          lng: this.to_location_lng,
        },
      };
      console.log('from', form);

      // Requête POST vers l'API pour enregistrer les données
      this.myApiService.createPackage(formData).subscribe((response) => {
        console.log('res', response);
      });
    } else {
      console.log('donnt good');
    }
  }
}
