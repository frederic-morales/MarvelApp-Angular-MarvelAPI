import { NgFor } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CharacterComponent } from '../character/character.component';
import { ApiRequestService } from '../../shared/services/api-request.service';
import { HeroesIds } from '../../shared/models/heroesIds.module';
import { CharacterInfoComponent } from '../character-info/character-info.component';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [NgFor, CharacterComponent, CharacterInfoComponent],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
})
export class CarrouselComponent {
  ngOnInit() {
    this.heroes.forEach((id) => {
      this.getCharacters(id);
      this.getCharactersComics(id);
    });
  }

  heroes = [
    1009610, //spiderMan
    1009351, //hulk:
    1009368, //IronMan:
    1009220, //CaptianAmerica:
  ]; // Id de cada personaje a renderizar

  apiResp: any;
  characters = signal<any[]>([]);

  private requestService = inject(ApiRequestService);

  private getCharacters(id: number) {
    this.requestService.getCharacters(id).subscribe((resp) => {
      //console.log(resp);
      this.apiResp = resp;
      const data = this.apiResp.data.results;
      this.characters.update((value) => [...value, data[0]]);
      //console.log(this.characters());
    });
  }

  charactersComics = signal<any[]>([]);

  private getCharactersComics(id: number) {
    this.requestService.getCharacterComics(id).subscribe((resp) => {
      this.apiResp = resp;
      const data = this.apiResp.data.results;
      this.charactersComics.update((value) => [...value, data]);
      console.log(this.charactersComics());
    });
  }
}
