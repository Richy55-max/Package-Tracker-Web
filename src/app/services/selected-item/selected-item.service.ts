import { Injectable } from '@angular/core';

//providedIn indique que le service s'ajoute dans le provider directement dans le décorateur @Injectable()
@Injectable({
  providedIn: 'root', // la classe est fournie dans le module racine
})
export class SelectedItemService {
  private selectedItem: string = 'Accueil'; // élément sélectionné par défaut

  getSelectedItem(): string {
    return this.selectedItem;
  }

  setSelectedItem(item: string): void {
    this.selectedItem = item;
  }
}
