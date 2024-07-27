import { Actor, vec, Keys } from "excalibur";
import { Resources } from "./resources";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(500, 150),
      width: 100,
      height: 100
    });
  }

  onInitialize() {
    this.graphics.add(Resources.Sword.toSprite());
    this.on('pointerup', () => {
      alert('yo');
    });
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
      this.pos.x += 5;
    }
    if (
      engine.input.keyboard.isHeld(Keys.A) ||
      engine.input.keyboard.isHeld(Keys.Left)
    ) {
      this.pos.x -= 5;
    }
    //console.log("update");
  }
}
