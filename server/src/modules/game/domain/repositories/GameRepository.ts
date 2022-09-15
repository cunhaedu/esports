import { Game } from '../entities/game';

export interface GameRepository {
  list(): Promise<Game[]>;
}
