import { randomUUID } from 'node:crypto';

export type GameProps = {
  id: string;
  title: string;
  bannerUrl: string;
}

export class Game {
  id: string;

  title: string;

  bannerUrl: string;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
