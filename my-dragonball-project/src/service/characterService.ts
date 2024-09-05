import axios from "axios";
import { CharacterDto } from "../models/characterDto";

const BASE_URL = "https://dragonball-api.com/api/characters";



class CharacterService {

  static async getCharactersWithFilters(
    page: number,
    limit: number,
    search: string,
    paramName: string
  ): Promise<CharacterDto[]> {
    try {

      const response = await axios.get(BASE_URL, {
        params: {
          page,
          limit,
          [paramName]: search
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching characters:', error);
      return [] 
    }
  }

    static async getAllCharacters(
    page: number,
    limit: number
  ): Promise<CharacterDto[]> {
    try {

      const response = await axios.get(`${BASE_URL}`, {
        params: {
          page,
          limit        
        }
      });
      return response.data.items || [];
    } catch (error) {
      console.error('Error fetching characters:', error);
      return [] 
    }
  }
  
  static async getCharacterById(id: number): Promise<CharacterDto> {
    try {
      const response = await axios.get<CharacterDto>(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching character:", error);
      throw error;
    }
  }
}

export default CharacterService;
