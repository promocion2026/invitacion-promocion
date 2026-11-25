/**
 * REPRODUCTOR.JS - Controlador del reproductor de música con ecualizador animado
 */
class ReproductorGraduacion {
  constructor() {
    this.audio = document.getElementById('audioPlayer');
    this.playBtn = document.getElementById('playPauseBtn');
    this.playIcon = document.getElementById('playIcon');
    this.pauseIcon = document.getElementById('pauseIcon');
    this.progressBar = document.getElementById('musicProgressBar');
    this.currentTimeLabel = document.getElementById('musicCurrentTime');
    this.totalDurationLabel = document.getElementById('musicDuration');
    this.waveformContainer = document.getElementById('waveformVisualizer');
    this.prevBtn = document.getElementById('prevTrackBtn');
    this.nextBtn = document.getElementById('nextTrackBtn');
    this.vinylDisk = document.getElementById('musicVinylDisk');
    this.likeBtn = document.getElementById('btnLikeMusic');

    this.isPlaying = false;
    this.isDragging = false;

    this.init();
  }

  init() {
    if (!this.audio) return;

    // Configuración inicial de volumen
    this.audio.volume = 0.8;

    // Like button toggle
    if (this.likeBtn) {
      this.likeBtn.addEventListener('click', () => {
        this.likeBtn.classList.toggle('text-rose-400');
        this.likeBtn.classList.toggle('text-dorado-champan/60');
        this.likeBtn.classList.toggle('scale-110');
      });
    }

    // Event listeners
    if (this.playBtn) {
      this.playBtn.addEventListener('click', () => this.togglePlay());
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.audio.currentTime = Math.max(0, this.audio.currentTime - 10);
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.audio.currentTime = Math.min(this.audio.duration || 0, this.audio.currentTime + 10);
      });
    }

    this.audio.addEventListener('loadedmetadata', () => {
      this.updateTotalDuration();
    });

    if (this.audio.readyState >= 1) {
      this.updateTotalDuration();
    }

    this.audio.addEventListener('timeupdate', () => {
      if (!this.isDragging) {
        this.updateProgress();
      }
    });

    this.audio.addEventListener('ended', () => {
      this.setPlayingState(false);
      this.audio.currentTime = 0;
    });

    if (this.progressBar) {
      this.progressBar.addEventListener('input', () => {
        this.isDragging = true;
      });

      this.progressBar.addEventListener('change', () => {
        const seekTime = (this.progressBar.value / 100) * (this.audio.duration || 0);
        this.audio.currentTime = seekTime;
        this.isDragging = false;
      });
    }
  }

  togglePlay() {
    if (!this.audio) return;

    if (this.audio.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    if (!this.audio) return;
    this.audio.play()
      .then(() => {
        this.setPlayingState(true);
      })
      .catch((err) => {
        console.warn('Reproducción automática bloqueada por el navegador:', err);
      });
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.setPlayingState(false);
  }

  setPlayingState(playing) {
    this.isPlaying = playing;
    if (this.playIcon && this.pauseIcon) {
      if (playing) {
        this.playIcon.classList.add('hidden');
        this.pauseIcon.classList.remove('hidden');
      } else {
        this.playIcon.classList.remove('hidden');
        this.pauseIcon.classList.add('hidden');
      }
    }

    if (this.waveformContainer) {
      if (playing) {
        this.waveformContainer.classList.add('waveform-playing');
      } else {
        this.waveformContainer.classList.remove('waveform-playing');
      }
    }

    if (this.vinylDisk) {
      if (playing) {
        this.vinylDisk.classList.add('anim-vinyl-spin');
      } else {
        this.vinylDisk.classList.remove('anim-vinyl-spin');
      }
    }
  }

  formatTime(seconds) {
    if (isNaN(seconds) || seconds === null) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  updateProgress() {
    if (!this.audio || !this.audio.duration) return;
    const progressPercent = (this.audio.currentTime / this.audio.duration) * 100;
    if (this.progressBar) {
      this.progressBar.value = progressPercent;
    }
    if (this.currentTimeLabel) {
      this.currentTimeLabel.textContent = this.formatTime(this.audio.currentTime);
    }
  }

  updateTotalDuration() {
    if (!this.audio || !this.audio.duration) return;
    if (this.totalDurationLabel) {
      this.totalDurationLabel.textContent = this.formatTime(this.audio.duration);
    }
  }
}

// Instanciar al cargar
let reproductorGraduacionInstance = null;
document.addEventListener('DOMContentLoaded', () => {
  reproductorGraduacionInstance = new ReproductorGraduacion();
  window.reproductorGraduacion = reproductorGraduacionInstance;
});
