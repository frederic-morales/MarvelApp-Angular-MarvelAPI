export interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
  };
  dateCreation: string;
  description: string;
}
