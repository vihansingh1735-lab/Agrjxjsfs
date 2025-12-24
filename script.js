/* 🎄 LOADER */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader")?.classList.add("hide");
  }, 1800);
});

/* ❄️ SNOW EFFECT */
const canvas = document.getElementById("snow");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let w, h;
  let snowflakes = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < 120; i++) {
    snowflakes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 1,
      d: Math.random() + 1
    });
  }

  function drawSnow() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();

    snowflakes.forEach(f => {
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    });

    ctx.fill();

    snowflakes.forEach(f => {
      f.y += f.d;
      if (f.y > h) {
        f.y = 0;
        f.x = Math.random() * w;
      }
    });
  }

  setInterval(drawSnow, 30);
}
