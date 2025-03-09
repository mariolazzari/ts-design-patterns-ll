import { Platform } from "./Platform";

export class Instagram extends Platform {
  postMedia(): void {
    console.log("Post media on Instagram");
  }
}
