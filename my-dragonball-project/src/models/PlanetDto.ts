export interface PlanetDto {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  characters: { name: string }[];  
  deletedAt?: string | null;
}
