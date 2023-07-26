import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() title = '';
  @Input() backgroundColor = '';
  @Input() disabled: boolean = false;
  @Input() onClick: Function | undefined;

  constructor() {}

  handleClick(): void {
    if (this.onClick) {
      this.onClick();
    }
  }
}
