import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import playerRun from './images/player-run.png';

export const Resources = {
  Sword: new ImageSource(sword),
  Raider: new ImageSource(playerRun)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
