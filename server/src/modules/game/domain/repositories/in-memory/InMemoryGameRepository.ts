import { Game } from '../../entities/game';
import { GameRepository } from '../GameRepository';
import { gamesMock } from '../../mocks/games.mock';

export class InMemoryGameRepository implements GameRepository {
  private games: Game[];

  constructor() {
    this.games = gamesMock;
  }

  async list(): Promise<Game[]> {
    return this.games;
  }
}
