abstract class Post {
  abstract post(): void;
}

export class InstagramPost extends Post {
  post(): void {
    console.log("Posting on Instagram");
  }
}

export class TikTokPost extends Post {
  post(): void {
    console.log("Posting on TikTok");
  }
}

export class TwitterPost extends Post {
  post(): void {
    console.log("Posting on Twitter");
  }
}
