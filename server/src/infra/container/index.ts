import { GameRepository } from '../../modules/game/domain/repositories/GameRepository';
import { PrismaGameRepository } from '../../modules/game/prisma/repositories/PrismaGameRepository';
import { container } from 'tsyringe';

container.registerSingleton<GameRepository>(
  'GameRepository',
  PrismaGameRepository
)
