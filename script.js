function stopAllAudio() {
  document.querySelectorAll("audio").forEach(audio => {
    audio.pause();
    audio.currentTime = 0; // reset to start
  });
}

function toggleAudio(id) {
  let audio = document.getElementById(id);

  if (audio.paused) {
    stopAllAudio();
    audio.play();
  } else {
    audio.pause();
  }
}
