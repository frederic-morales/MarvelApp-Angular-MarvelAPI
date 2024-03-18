import { Character } from './character.module';

export interface Comic {
  thumbnail: {
    extension: string;
    path: string;
  };
  id: number;
  title: string;
  characters: {
    items: [
      {
        name: string;
      }
    ];
  };
  modified: string;
  creators: {
    available: number;
    items: [{ name: string; role: string }];
  };
  prices: [
    {
      price: number;
    }
  ];
}
