import { Platform } from "./Platform";

// incompatible class
export class TikTok {
  constructor() {}

  scheduleMedia() {
    console.log("Schedule media on TikTok");
  }
}

// adapter class
export class TikTokAdapter extends Platform {
  constructor(private tikTok: TikTok) {
    super();
  }

  postMedia(): void {
    console.log("TikTok adapter posted");
    this.tikTok.scheduleMedia();
  }
}
