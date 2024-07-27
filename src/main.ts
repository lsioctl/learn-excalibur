import { Engine } from "excalibur";
import { Player } from "./player";
import { loader } from "./resources";
import { Player2 } from "./player2";

class Game extends Engine {
    constructor() {
      super({width: 800, height: 600});
    }
    initialize() {
      const player = new Player();
      const player2 = new Player2();
      this.add(player);
      this.add(player2);

      this.start(loader);
    }
  }
  
  export const game = new Game();
  game.initialize();