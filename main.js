document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('background-video');
  const popup = document.getElementById('popup');
  let sound, isPlaying = false;

  sound = new Howl({
    src: ['https://files.catbox.moe/qf2hqo.mp4'],
    html5: true,
    loop: true
  });

  function initAudio() {
    if (!sound) {
      sound = new Howl({
        src: ['bgmove.mp4'],
        html5: true,
        loop: true
      });
    }
  }

  function playAll() {
    video.play();
    sound.play();
    isPlaying = true;
  }

  function pauseAll() {
    video.pause();
    sound.pause();
    isPlaying = false;
  }

  popup.addEventListener('click', () => {
    popup.style.display = 'none';
    initAudio();
    playAll();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseAll();
    else if (isPlaying) playAll();
  });
});