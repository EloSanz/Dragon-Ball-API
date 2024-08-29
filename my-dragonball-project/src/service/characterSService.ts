import axios from 'axios';
import { CharacterDto } from '../models/characters/characterDto';

const BASE_URL = 'https://dragonball-api.com/api/characters';

interface PaginationResponse<T> {
  items: T[];
  meta: {
    currentPage: number;
    totalPages: number;
  };
  links: {
    first: string;
    last: string;
    next: string;
    prev: string;
  };
}

class CharacterService {

  static async getCharacters(page: number = 1, limit: number = 10, search: string = '', paramName: string = 'name'): Promise<PaginationResponse<CharacterDto>> {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          page,
          limit,
          [paramName]: search
        }
      });
      
      if (response.data.items && response.data.links && response.data.meta) {
        return response.data;
      } else {
        return {
          items: response.data, 
          links: {
            first: '',
            last: '',
            next: '',
            prev: '',
          },
          meta: {
            currentPage: page,
            totalPages: 1,
          },
        };
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  }


  static async getCharacterById(id: number): Promise<CharacterDto> {
    try {
      const response = await axios.get<CharacterDto>(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching character:', error);
      throw error;
    }
  }
}

export default CharacterService;
