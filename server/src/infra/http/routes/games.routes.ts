import { Router } from 'express';
import { ListGamesController } from '../../../modules/game/useCases/ListGames/ListGamesController';

const gameRoutes = Router();

const listGamesController = new ListGamesController();

gameRoutes.get('/games', listGamesController.handle);

export { gameRoutes }
