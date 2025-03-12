import { MediaLibrary } from "./MediaLibrary";
import { MediaPlayer } from "./MediaPlayer";

const lib = new MediaLibrary();

const player1 = new MediaPlayer();
lib.attach(player1);

const player2 = new MediaPlayer();
lib.attach(player2);

const player3 = new MediaPlayer();
lib.attach(player3);

lib.addMedia("video.mp4");
lib.addMedia("audio.mp3");

lib.detach(player3);
