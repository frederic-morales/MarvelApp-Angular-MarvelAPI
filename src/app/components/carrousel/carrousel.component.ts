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
    this.getCharacters();
  }

  characters = signal<any[]>([]);

  heroes = HeroesIds; // Id de cada personaje a renderizar
  apiResp: any;

  private requestService = inject(ApiRequestService);

  private getCharacters() {
    for (let i = 0; i < this.heroes.length; i++) {
      this.requestService.getCharacters(this.heroes[i]).subscribe((resp) => {
        console.log(resp);
        this.apiResp = resp;
        const data = this.apiResp.data.results;
        this.characters.update((value) => [...value, data[0]]);
        console.log(this.characters());
      });
    }
  }
}
