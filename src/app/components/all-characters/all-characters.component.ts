import { Component, signal, inject } from '@angular/core';
import { ApiRequestService } from '../../shared/services/api-request.service';
import { NgFor } from '@angular/common';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-all-characters',
  standalone: true,
  imports: [NgFor, CharacterComponent],
  templateUrl: './all-characters.component.html',
  styleUrl: './all-characters.component.css',
})
export class AllCharactersComponent {
  ngOnInit() {
    this.getAllCharacters(this.offsets[0]);
  }

  offsets = [100, 200, 300, 400, 500, 600, 700];

  private requestService = inject(ApiRequestService);

  apiRes: any;
  characters = signal<any[]>([]);
  charactersComics = signal<any[]>([]);
  charactersSeries = signal<any[]>([]);

  private getAllCharacters(offset: number) {
    this.requestService.getAllCharacters(offset).subscribe((resp) => {
      this.apiRes = resp;
      const results = this.apiRes.data.results;
      results.forEach((element: any) => {
        this.characters.update((value) => [...value, element]);
      });

      // Obtenemos los comics del personaje
      results.forEach((element: any) => {
        this.charactersComics.update((value) => [
          ...value,
          element.comics.items,
        ]);
      });

      results.forEach((element: any) => {
        this.charactersSeries.update((value) => [
          ...value,
          element.series.items,
        ]);
      });
      //console.log(this.charactersSeries());
      //console.log(this.characters());
      //console.log(this.charactersComics());
    });
  }

  getOtherCharacters(offset: number) {
    this.characters.update(() => []);
    this.getAllCharacters(offset);
  }
}
