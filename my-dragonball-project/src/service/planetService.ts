import axios from "axios";
import { PlanetDto } from "../models/PlanetDto";

const BASE_URL = "https://dragonball-api.com/api/planets";

const PlanetService = {
  async getPlanets(limit: number = 20): Promise<PlanetDto[]> {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        limit,
      },
    });
    return response.data.items;
  },
  async getPlanetById(id: number): Promise<PlanetDto> {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  },

  async getPlanetByCharacterName(
    characterName: string
  ): Promise<PlanetDto | null> {
    try {
      let i: number;
      for (i = 1; i <= 20; i++) {
        const response = await axios.get(`${BASE_URL}/${i}`);

        const planet: PlanetDto = response.data;
        if (
          planet &&
          planet.characters &&
          planet.characters.some(
            (character: { name: string }) => character.name === characterName
          )
        ) {
          return planet;
        }
      }

      return null;
    } catch (error) {
      console.error("Error fetching planet by character name:", error);
      throw new Error("Failed to fetch planet");
    }
  },
};

export default PlanetService;
