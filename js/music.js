const a=new Audio('assets/music/romantic-piano.mp3');a.loop=true;
document.getElementById('musicBtn').onclick=()=>a.paused?a.play():a.pause();