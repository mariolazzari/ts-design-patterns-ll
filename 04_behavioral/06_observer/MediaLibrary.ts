import { Observer } from "./Observer";
import { Subject } from "./Subject";

// concrete subject
export class MediaLibrary extends Subject {
  private observers: Observer[] = [];
  private mediaFiles: string[] = [];

  attach(observer: Observer): void {
    console.log("Subject: attach observer");
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      return console.log("Observer not found");
    }

    this.observers.slice(index, 1);
    console.log("Subject: observer detatched");
  }

  addMedia(media: string) {
    this.mediaFiles.push(media);
    this.notify();
  }

  notify(): void {
    this.observers.forEach(o => o.update(this.mediaFiles));
  }
}
