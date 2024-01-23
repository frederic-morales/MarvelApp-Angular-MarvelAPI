import { CharacterComics } from './character-comics.module';

export interface Character {
  comics: CharacterComics;
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  modified: Date;
  description: string;
}
