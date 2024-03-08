import { Component } from '@angular/core';

@Component({
  selector: 'app-search-character',
  standalone: true,
  imports: [],
  templateUrl: './search-character.component.html',
  styleUrl: './search-character.component.css',
})
export class SearchCharacterComponent {
  search = document.getElementById("search")
  input = document.getElementById("input")

  show(){
    this.search?.classList.toggle("active")
    this.input?.focus()
  }
}
