export enum BggThingsTypes {
  BOARDGAME = 'boardgame',
  BOARDGAMEEXPANSION = 'boardgameexpansion',
  BOARDGAMEACCESSORY = 'boardgameaccessory',
}

export interface BggGame {
  gameId: number;
  name: string;
  description: string;
  image: string;
  thumbnail: string;
  minPlayers: number;
  maxPlayers: number;
  playingTime: number;
  mechanics: string[];
  isExpansion: boolean;
  yearPublished: number;
  bggRating: number;
  averageRating: number;
  rank: number;
  designers: string[];
  publishers: string[];
  artists: string[];
  playerPollResults: BggPlayerPollResult[];
}

export interface BggPlayerPollResult {
  numPlayers: number;
  best: number;
  recommended: number;
  notRecommended: number;
  numPlayersIsAndHigher: boolean;
}
