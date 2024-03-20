import { Component, Input, signal } from '@angular/core';
import { Character } from '../../shared/models/character.module';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Comic, Serie } from '../../shared/models/comics.module';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor, DatePipe, RouterLinkWithHref],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {
  @Input({ required: true }) character!: Character;
  @Input() characterComics!: Array<Comic>;
  @Input() characterSeries!: Array<Serie>;
  @Input() showDescription!: boolean;
  @Input() showComicsAndSeries!: boolean;

  showInfo = signal<boolean>(false);

  //Retornamos el id del comic clickeado para pasarlo al router
  returnId(resource: string): string {
    let id: string = '';
    if (resource.includes('comics')) {
      const comicsIndex = resource.indexOf('comics');
      id = resource.slice(comicsIndex + 7);
    } else if (resource.includes('series')) {
      const comicsIndex = resource.indexOf('series');
      id = resource.slice(comicsIndex + 7);
    }
    return id;
  }

  showComics() {
    if (this.showInfo() === false) {
      this.showInfo.set(true);
    } else if (this.showInfo() === true) {
      this.showInfo.set(false);
    }
  }
}
