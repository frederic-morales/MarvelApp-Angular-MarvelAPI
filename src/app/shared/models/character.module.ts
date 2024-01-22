export interface Character {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  dateCreation: string;
  description: string;
}
