import axios from 'axios';
import { PlanetDto } from '../models/PlanetDto';

const BASE_URL = 'https://dragonball-api.com/api/planets';

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
};

export default PlanetService;
