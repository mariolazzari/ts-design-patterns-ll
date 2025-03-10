import { InstagramPost, TikTokPost, TwitterPost } from "./Post";

// facade
export class Publisher {
  private instagram = new InstagramPost();
  private tikTok = new TikTokPost();
  private twitter = new TwitterPost();

  publish(): void {
    this.instagram.post();
    this.tikTok.post();
    this.twitter.post();
  }
}
