const nav = document.getElementById("main-nav");
const logoStrip = document.getElementById("logo-strip");

const onScroll = () => {
  if (!nav || !logoStrip) return;

  const trigger = logoStrip.offsetTop + logoStrip.offsetHeight - nav.offsetHeight;
  const shouldShrink = window.scrollY > trigger;
  document.body.classList.toggle("scrolled", shouldShrink);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
