import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-search-character',
  standalone: true,
  imports: [],
  templateUrl: './search-character.component.html',
  styleUrl: './search-character.component.css',
})
export class SearchCharacterComponent {
  showInput = signal<boolean>(false);

  displayInput() {
    if (!this.showInput()) {
      this.showInput.set(true);
    } else {
      this.showInput.set(false);
    }
  }
}
