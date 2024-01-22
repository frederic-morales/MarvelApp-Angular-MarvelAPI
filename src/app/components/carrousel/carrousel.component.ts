import { NgFor } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CharacterComponent } from '../character/character.component';
import { Character } from '../../shared/models/character.module';
import { ApiRequestService } from '../../shared/services/api-request.service';
import { Characters } from '../../shared/models/structurApiCharacter.module';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [NgFor, CharacterComponent],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
})
export class CarrouselComponent {
  /*characters = <Character[]>[
    {
      id: 1,
      name: 'Spider Man',
      image: 'https://img2.rtve.es/i/?w=1600&i=1442912664626.jpg',
      dateCreation: '16 01 2024',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolores   molestias dignissimos nam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolores molestias dignissimos nam',
    },
    {
      id: 2,
      name: 'Hulk',
      image:
        'https://www.metroworldnews.com/resizer/5iqVNiSBaB_buM7MXkltFNs8rnI=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/4FNDZKASM5G6FNIEB5FFZN5NRM.jpg',
      dateCreation: '16 01 2024',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolores   molestias dignissimos nam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolores molestias dignissimos nam adipisicing elit. Fuga dolores   molestias dignissimos nam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolores molestias dignissimos nam',
    },
    {
      id: 2,
      name: 'Iron Man',
      image:
        'https://www.mundodeportivo.com/alfabeta/hero/2022/10/image-14.1664995292.6726.jpg?width=768&aspect_ratio=16:9&format=nowebp',
      dateCreation: '16 01 2024',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolores   molestias dignissimos nam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolores molestias dignissimos nam adipisicing elit. Fuga dolores   molestias dignissimos nam Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      id: 2,
      name: 'Iron Man',
      image:
        'https://www.mundodeportivo.com/alfabeta/hero/2022/10/image-14.1664995292.6726.jpg?width=768&aspect_ratio=16:9&format=nowebp',
      dateCreation: '16 01 2024',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolores   molestias dignissimos nam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolores molestias dignissimos nam adipisicing elit. Fuga dolores   molestias dignissimos nam Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
  ];*/

  ngOnInit() {
    this.getComics();
  }

  characters = signal<any[]>([]);

  apiResp: any;
  results: any;

  private requestService = inject(ApiRequestService);

  /*heroesIds: {} = {
    captianAmerica: 1009220,
    ironMan: 1009368,
    hulk: 1009351,
    spiderMan: 1009610,
  };*/

  heroes: number[] = [1009220, 1009351, 1009368, 1009610];

  private getComics() {
    for (let i = 0; i < this.heroes.length; i++) {
      this.requestService.getCharacters(this.heroes[i]).subscribe((resp) => {
        //console.log(this.characters());
        this.apiResp = resp;
        const data = this.apiResp.data;
        const character = data.results;
        this.characters.update((value) => [...value, character[0]]);
        console.log(this.characters());
      });
    }
  }

  /*private getCharacterInfo() {
    this.requestService.getCharacterInfo().subscribe({
      next: (character) => {
        this.apiResp = character;
        this.data = this.apiResp.data;
        this.results = this.data.results;
        console.log(this.results[0]);
      },
    });
  }*/
}
