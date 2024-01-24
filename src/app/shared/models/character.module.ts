export interface Character {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  modified: Date;
  description: string;
}
