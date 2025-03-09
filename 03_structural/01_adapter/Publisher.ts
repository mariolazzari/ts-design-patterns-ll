import { Platform } from "./Platform";

export class Publisher {
  constructor() {}

  publishContent(platform: Platform) {
    console.log("Publisher is ready to post content");
    platform.postMedia();
  }
}
