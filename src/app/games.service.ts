import { Injectable } from '@angular/core';
enum GameStateEnum{
  MENU,
  GAMEPLAY,
  GAMEOVER,
  WIN
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  health: number=1;
  gameState: GameStateEnum=GameStateEnum.MENU
  cardPosition: number[]=[0,1,2,3]
  constructor() { }
}
