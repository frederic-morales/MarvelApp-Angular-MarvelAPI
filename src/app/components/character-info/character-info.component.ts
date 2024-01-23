import { Component } from '@angular/core';
import { HeroesIds } from '../../shared/models/heroesIds.module';

@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.css',
})
export class CharacterInfoComponent {
  heroes = HeroesIds;
}
