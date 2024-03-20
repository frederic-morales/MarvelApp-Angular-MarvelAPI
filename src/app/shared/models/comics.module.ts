import { Character } from './character.module';

export interface Comic extends Omit<Character, 'description'> {
  title: string;
  resourceURI: string;
  characters: {
    items: [
      {
        name: string;
      }
    ];
  };
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

export interface Serie extends Omit<Comic, 'prices'> {}
