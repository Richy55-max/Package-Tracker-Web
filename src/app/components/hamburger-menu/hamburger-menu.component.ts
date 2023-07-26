import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {
  menuItems = ['Accueil', 'Training', 'Package', 'Delivery'];
  isMenuOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMenuOpen = window.innerWidth <= 767 ? false : true;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
