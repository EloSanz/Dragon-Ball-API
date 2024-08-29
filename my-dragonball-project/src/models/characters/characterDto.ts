
export interface TransformationDto {
    id: number;
    name: string;
    image: string;
    ki: string;
  }
  
  export interface PlanetDto {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
  }
  
  export interface CharacterDto {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    originPlanet: PlanetDto;
    transformations: TransformationDto[];
  }
  