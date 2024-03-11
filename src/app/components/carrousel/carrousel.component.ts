import { NgFor, NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CharacterComponent } from '../character/character.component';
import { ApiRequestService } from '../../shared/services/api-request.service';
import { SearchCharacterComponent } from '../search-character/search-character.component';
import { RouterLinkWithHref } from '@angular/router';
import { SIGNAL } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [
    NgFor,
    CharacterComponent,
    SearchCharacterComponent,
    RouterLinkWithHref,
    NgIf,
  ],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
})
export class CarrouselComponent {
  ngOnInit() {
    this.getCharactersAndComics();
  }

  heroes = [
    1009610, //spiderMan
    1009351, //hulk:
    1009368, //IronMan:
    1009220, //CaptianAmerica:
  ]; // Id de cada personaje a renderizar

  apiResp: any;
  characters = signal<any[]>([]);
  charactersComics = signal<any[]>([]);
  charactersSeries = signal<any[]>([]);

  private requestService = inject(ApiRequestService);

  private getCharacters(id: number) {
    this.requestService.getCharacters(id).subscribe((resp) => {
      //console.log(resp);
      this.apiResp = resp;
      const results = this.apiResp.data.results;
      this.characters.update((value) => [...value, results[0]]);

      //Obtenemos los comics del personaje
      const comics = results[0].comics.items;
      this.charactersComics.update((value) => [...value, comics]);

      //Obtenemos las series del personaje
      const series = results[0].series.items;
      this.charactersSeries.update((value) => [...value, series]);

      //console.log(this.charactersSeries());
      //console.log(this.charactersComics());
      //console.log(this.characters());
    });
  }
  private getCharactersAndComics() {
    this.heroes.forEach((id) => {
      this.getCharacters(id);
    });
  }

  //SearchButton
  showInput = signal<boolean>(false);
  showCharacter = signal<boolean>(false);
  characterSearched = signal<any>({});

  displayInput() {
    if (!this.showInput()) {
      this.showInput.set(true);
    } else {
      this.showInput.set(false);
    }
  }

  inputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    this.displayInput();
    this.getCharacterByName(input.value);
    this.showCharacter.set(true);
  }

  private getCharacterByName(name: string) {
    this.requestService.getCharacterByName(name).subscribe((resp) => {
      this.apiResp = resp;
      this.characterSearched.set(this.apiResp.data.results[0]);
    });
  }
}
