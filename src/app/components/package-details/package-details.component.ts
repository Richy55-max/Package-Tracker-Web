import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
})
export class PackageDetailsComponent {
  @Input() details: any;
}
