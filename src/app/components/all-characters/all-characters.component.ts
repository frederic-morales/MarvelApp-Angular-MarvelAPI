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
    this.getAllCharacters();
  }

  private requestService = inject(ApiRequestService);

  apiRes: any;
  characters = signal<any[]>([]);

  private getAllCharacters() {
    this.requestService.getAllCharacters(0).subscribe((resp) => {
      this.apiRes = resp;
      const results = this.apiRes.data.results;
      results.forEach((element: any) => {
        this.characters.update((value) => [...value, element]);
      });
      console.log(this.characters());
    });
  }
}
