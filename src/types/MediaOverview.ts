import { MediaFormat } from "./MediaFormat";
import { MediaGenre } from "./MediaGenre";
import { MediaType } from "./MediaType";

export interface MediaOverview {
  id: number;
  title: string;
  type: MediaType;
  episodes: number;
  format: MediaFormat;
  genres: MediaGenre[];
  popularity: number;
  startDate: number;
  endDate: number;
}
