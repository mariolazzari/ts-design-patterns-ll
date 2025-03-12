import { Observer } from "./Observer";

// Concrete observer
export class MediaPlayer extends Observer {
  update(mediaFiles: string[]): void {
    console.log("Observer playing:", mediaFiles);
  }
}
