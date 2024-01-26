import { Component, Input } from '@angular/core';
import { HeroesIds } from '../../shared/models/heroesIds.module';
import { CharacterComics } from '../../shared/models/character-comics.module';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.css',
})
export class CharacterInfoComponent {
  @Input({ required: true }) comicsArray!: any;

  characterComponent!: CharacterComponent;
}
