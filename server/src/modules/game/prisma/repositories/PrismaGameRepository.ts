import { injectable } from 'tsyringe';

import { GameRepository } from '../../../game/domain/repositories/GameRepository';
import { Game } from '../../../game/domain/entities/game';
import { prisma } from '../../../../infra/prisma/client';

@injectable()
export class PrismaGameRepository implements GameRepository {
  private repository = prisma.game;

  async list(): Promise<Game[]> {
    return this.repository.findMany();
  }
}
