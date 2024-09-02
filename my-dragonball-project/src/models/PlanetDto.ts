import { CharacterDto } from "./characterDto";

export interface PlanetDto {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  characters: CharacterDto[];  
  deletedAt?: string | null;
}
