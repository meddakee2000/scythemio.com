type Listener = (isPlaying: boolean) => void;

class AudioController {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private listeners: Set<Listener> = new Set();

  init(src: string) {
    if (this.audio) return;
    
    this.audio = new Audio(src);
    this.audio.loop = true;
  }

  toggle() {
    if (!this.audio) return;

    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    } else {
      this.audio.play().catch((err) => {
        console.error("Playback blocked:", err);
      });
      this.isPlaying = true;
    }

    this.notifyListeners();
  }

  getPlayingStatus() {
    return this.isPlaying;
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.isPlaying));
  }
}

export const audioController = new AudioController();