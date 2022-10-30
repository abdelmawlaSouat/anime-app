import { MediaFormat } from "./MediaFormat";
import { MediaGenre } from "./MediaGenre";
import { MediaType } from "./MediaType";

export interface MediaOverview {
  id: number;
  title: {
    romaji: string;
  };
  description: string;
  type: MediaType;
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
  };
  episodes: number;
  format: MediaFormat;
  genres: MediaGenre[];
  popularity: number;
  startDate: {
    year: number;
  };
  endDate: {
    year: number;
  };
}
