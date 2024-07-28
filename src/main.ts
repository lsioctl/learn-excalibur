import { Engine } from "excalibur";
import { Player } from "./player";
import { loader, Resources } from "./resources";
import { Player2 } from "./player2";

class Game extends Engine {
    constructor() {
      super({width: 800, height: 600});
    }
    async initialize() {
      await this.start(loader);
    }
  }
  
  export const game = new Game();
  await game.initialize();

  const currentScene = game.currentScene;

  Resources.tiledMap.addToScene(currentScene);

  const player = new Player();
  const player2 = new Player2();
  currentScene.add(player);
  currentScene.add(player2);
