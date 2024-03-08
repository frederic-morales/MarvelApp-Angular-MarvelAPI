import {
  Component,
  Input,
  signal,
  inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { Character } from '../../shared/models/character.module';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HeroesIds } from '../../shared/models/heroesIds.module';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor, DatePipe, RouterLinkWithHref],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {
  @Input({ required: true }) character!: Character;
  @Input({ required: true }) characterComics!: any;
  @Input({ required: true }) characterSeries!: any;
  @Output() characterIdfromComics = new EventEmitter<any>();
  //@Input({ required: true }) characterName!: any;

  //Retornamos el id del comic clickeado para pasarlo al router
  returnId(resource: string) {
    const id = resource.slice(-5);
    return id;
  }

  showComics() {
    let x : any = document.getElementById("comics");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
}
