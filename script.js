// Stop all audio
function stopAllAudio() {
  document.querySelectorAll("audio").forEach(audio => {
    audio.pause();
    audio.currentTime = 0; // reset to start
  });
}

// Toggle play/pause when clicking image
function toggleAudio(id) {
  let audio = document.getElementById(id);

  if (audio.paused) {
    stopAllAudio();
    audio.play();
  } else {
    audio.pause();
  }
}

// Playlist order
const playlist = ["audio1", "audio2", "audio3", "audio4", "audio5", "audio6", "audio7", "audio8", 
                  "audio9", "audio10", "audio11", "audio12", "audio13", "audio14", "audio15", "audio16"];

// Attach event listeners for auto-play + progress bar
playlist.forEach((id, index) => {
  let audio = document.getElementById(id);

  // Auto-play next track
  audio.addEventListener("ended", () => {
    let nextIndex = index + 1;
    if (nextIndex < playlist.length) {
      let nextAudio = document.getElementById(playlist[nextIndex]);
      stopAllAudio();
      nextAudio.play();
    }
  });

  // Progress bar update
  audio.addEventListener("timeupdate", () => {
    let progressBar = document.getElementById("progressBar" + (index + 1));
    if (progressBar) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = percentage + "%";
      progressBar.setAttribute("aria-valuenow", percentage);
    }
  });
});
