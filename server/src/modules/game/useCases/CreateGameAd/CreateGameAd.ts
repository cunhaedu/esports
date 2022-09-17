import { inject, injectable } from 'tsyringe';

import { GameRepository } from '../../domain/repositories/GameRepository';
import { AdRepository } from '../../domain/repositories/AdRepository';
import { Ad } from '../../domain/entities/Ad';

type CreateGameAdRequest = {
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
}

@injectable()
export class CreateGameAd {
  constructor(
    @inject('GameRepository')
    private gameRepository: GameRepository,

    @inject('AdRepository')
    private adRepository: AdRepository
  ) {}

  async execute(gameId: string, data: CreateGameAdRequest): Promise<void> {
    const game = await this.gameRepository.find(gameId);

    if (!game) {
      throw new Error(`The game with ID ${gameId} does not exists`);
    }

    await this.adRepository.create({
      ...data,
      gameId,
      weekDays: data.weekDays.join(',')
    } as Ad);
  }
}
