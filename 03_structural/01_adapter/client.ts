import { Instagram } from "./Instagram";
import { Publisher } from "./Publisher";
import { TikTok, TikTokAdapter } from "./TikTok";

const publisher = new Publisher();
const instagram = new Instagram();
publisher.publishContent(instagram);

const tikTok = new TikTok();
const tikTokAdapter = new TikTokAdapter(tikTok);
// publisher.publishContent(tikTok); -> error
publisher.publishContent(tikTokAdapter);
