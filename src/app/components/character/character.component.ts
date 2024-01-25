import { Component, Input, signal, inject } from '@angular/core';
import { Character } from '../../shared/models/character.module';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CharacterInfoComponent } from '../character-info/character-info.component';
import { HeroesIds } from '../../shared/models/heroesIds.module';
import { ApiRequestService } from '../../shared/services/api-request.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor, DatePipe, CharacterInfoComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {
  ngOnInit() {
    this.getCharactersComics();
  }

  @Input({ required: true }) message!: string;
  @Input({ required: true }) character!: Character;

  private requestService = inject(ApiRequestService);

  heroes = HeroesIds; // Id de cada personaje a renderizar
  apiResp: any;
  charactersComics = signal<any[]>([]);
  character1 = signal<any[]>([]);

  private getCharactersComics() {
    for (let i = 0; i < this.heroes.length; i++) {
      this.requestService
        .getCharacterComics(this.heroes[i])
        .subscribe((resp) => {
          //console.log(resp);
          this.apiResp = resp;
          const data = this.apiResp.data.results;
          this.charactersComics.update((value) => [...value, data]);
          this.character1.update((value) => [this.charactersComics()[0]]);
          //console.log(this.charactersComics());
          console.log(this.character1());
        });
    }
  }
}
