import axios from "axios";
import { CharacterDto } from "../models/characterDto";
export  interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Links {
  first: string;
  previous: string | null;
  next: string | null;
  last: string;
}

const BASE_URL = "https://dragonball-api.com/api/characters";

class CharacterService {

  static async getCharactersWithFilters(
    page: number,
    limit: number,
    search: string,
    paramName: string,
    gender? : string,
  ): Promise<CharacterDto[]> {
    try {

      const response = await axios.get(BASE_URL, {
        params: {
          page,
          limit,
          [paramName]: search,
          gender: gender || undefined
        },
      });

      return response.data || [];
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
  }

  static async getAllCharacters(
    page: number,
    limit: number
  ): Promise<{ items: CharacterDto[], meta: Meta, links: Links | null }> {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          page,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return { items: [], meta: {
        totalItems: 0,
        itemCount: 0,
        itemsPerPage: 0,
        totalPages: 0,
        currentPage: 0
      }, links: null };
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
