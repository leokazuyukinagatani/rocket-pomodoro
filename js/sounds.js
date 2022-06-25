export default function() {
  const treeAudio = new Audio("audios/Floresta.wav");
  const rainAudio = new Audio("audios/Chuva.wav");
  const cityAudio = new Audio("audios/Cafeteria.wav");
  const campAudio = new Audio("audios/Lareira.wav");
  const finishAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");


  treeAudio.loop = true;
  rainAudio.loop = true;
  cityAudio.loop = true;
  campAudio.loop = true;
  
  function initTree() {
    treeAudio.play();
  }

  function stopTree() {
    treeAudio.pause();
  }

  function initRain() {
    rainAudio.play();
  }

  function stopRain() {
    rainAudio.pause();
  }
  function initCity() {
    cityAudio.play();
  }

  function stopCity() {
    cityAudio.pause();
  }

  function initCamp() {
    campAudio.play();
  }

  function stopCamp() {
    campAudio.pause();
  }

  function finishPlay() {
    finishAudio.play();
  }
  function pressButton() {
    buttonPressAudio.play();
  }

  return {
    initTree,
    stopTree,
    initRain,
    stopRain,
    initCity,
    stopCity,
    initCamp,
    stopCamp,
    finishPlay,
    pressButton
  }
};

 