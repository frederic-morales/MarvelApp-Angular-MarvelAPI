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
  @Input({ required: true }) message!: string;
  @Input({ required: true }) character!: Character;
}
