const doc = document.querySelector("body");
const scrollWrap = document.getElementsByClassName("scrollWrap")[0];

const heightObserver = new ResizeObserver((entries) => {
  const height = Math.round(entries[0].contentRect.height);
  const speed = 0.02;
  var offset = 0;
  doc.style.height = Math.floor(height) + "px";

  function smoothScrolling() {
    offset += (window.scrollY - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScrolling);
  }

  smoothScrolling();
});

heightObserver.observe(scrollWrap);

const obs = document.querySelectorAll(".obs");
const observer = new ResizeObserver((entries) => {
  const hsize = Math.round(entries[0].contentRect.height);
  const wsize = Math.round(entries[0].contentRect.width);
  console.log("altura", hsize, "ancho", wsize);
});
observer.observe(obs[0]);
