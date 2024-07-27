import { Actor, vec, Keys, SpriteSheet, Animation, range } from "excalibur";
import { Resources } from "./resources";

const runSheet = SpriteSheet.fromImageSource({
    image: Resources.Raider,
    grid: {
        rows: 1,
        columns: 21,
        spriteWidth: 96,
        spriteHeight: 96
    }
});

const runLeft = Animation.fromSpriteSheet(runSheet, range(1, 10), 200);
const runRight = Animation.fromSpriteSheet(runSheet, range(11, 21), 200);
const stoppedSprite = runSheet.sprites[0];

export class Player2 extends Actor {
  constructor() {
    super({
      pos: vec(500, 300),
      width: 100,
      height: 100
    });
  }

  onInitialize() {
    this.graphics.add(stoppedSprite)
  }

  public update(engine: ex.Engine, delta: number) {
    super.update(engine, delta);
    if (
      engine.input.keyboard.isHeld(Keys.W) ||
      engine.input.keyboard.isHeld(Keys.Up)
    ) {
      this.pos.y -= 5;
    }
    if (
      engine.input.keyboard.isHeld(Keys.S) ||
      engine.input.keyboard.isHeld(Keys.Down)
    ) {
      this.pos.y += 5;
    }
    if (
      engine.input.keyboard.isHeld(Keys.D) ||
      engine.input.keyboard.isHeld(Keys.Right)
    ) {
      this.graphics.use(runRight);
      this.pos.x += 5;
    }
    if (
      engine.input.keyboard.wasReleased(Keys.D) ||
      engine.input.keyboard.wasReleased(Keys.Right) ||
      engine.input.keyboard.wasReleased(Keys.A) ||
      engine.input.keyboard.wasReleased(Keys.Left)
    ) {
      this.graphics.add(stoppedSprite)
    }
    if (
      engine.input.keyboard.isHeld(Keys.A) ||
      engine.input.keyboard.isHeld(Keys.Left)
    ) {
      this.graphics.use(runLeft);
      this.pos.x -= 5;
    }
    //console.log("update");
  }
}
