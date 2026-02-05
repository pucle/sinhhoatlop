export type BulletType = 'REGULAR' | 'GOLD' | 'RED' | 'BLUE' | 'PURPLE' | 'SILVER';

export interface Bullet {
  type: BulletType;
  isFired: boolean;
}

export interface Player {
  id: string;
  name: string;
  hp: number;
  items: string[];
  skill: string;
  skillCooldown: number;
  portrait: string;
  color: string;
  personality: string;
}

export type GamePhase = 'LOBBY' | 'PLAYING' | 'RESULT';

export interface GameState {
  players: Player[];
  currentPlayerIndex: number;
  chamber: Bullet[];
  chamberIndex: number;
  phase: GamePhase;
  logs: string[];
  winner: Player | null;
}
