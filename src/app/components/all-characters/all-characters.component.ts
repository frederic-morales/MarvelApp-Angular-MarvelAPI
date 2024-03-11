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
    this.getAllCharacters(0);
  }

  offsets = [0, 100, 200, 300, 400, 500, 600, 700, 800];

  private requestService = inject(ApiRequestService);

  apiRes: any;
  characters = signal<any[]>([]);

  getAllCharacters(offset: number) {
    this.requestService.getAllCharacters(offset).subscribe((resp) => {
      this.apiRes = resp;
      const results = this.apiRes.data.results;
      results.forEach((element: any) => {
        this.characters.update((value) => [...value, element]);
      });
      console.log(this.characters());
    });
  }

  getOtherCharacters(offset: number) {
    this.characters.update((value) => []);
    this.getAllCharacters(offset);
  }
}
