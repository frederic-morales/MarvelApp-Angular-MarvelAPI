import { Component, Input } from '@angular/core';
import { Character } from '../../shared/models/character.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {

  @Input({ required: true }) message!: string;
  @Input({ required: true }) character!: Character;
}
