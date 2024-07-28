import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import playerRun from './images/player-run.png';
import { TiledResource } from '@excaliburjs/plugin-tiled';
// this is possible thanks to Vite
// it gets the url regarding the env (dev, prod)
// from supported assets
// it needs also declare module "*.tmx";
// in files.d.ts
import cityTiledUrl from './images/example-city.tmx';

// as const needed for strong typing
export const Resources = {
  Sword: new ImageSource(sword),
  Raider: new ImageSource(playerRun),
  tiledMap: new TiledResource(cityTiledUrl, {
    strict: false
  })
} as const; 

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
