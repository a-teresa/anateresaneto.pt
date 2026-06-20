// ---- Boot sequence ----
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const boot = document.getElementById('boot');
  const log = document.getElementById('bootlog');

  const lines = [
    '[ 0.000000 ] booting portfolio v0.1.0',
    '[ 0.014221 ] init zephyr subsystem ......... OK',
    '[ 0.028540 ] mounting yocto rootfs ......... OK',
    '[ 0.041002 ] probing devices: i2c spi uart . OK',
    '[ 0.052310 ] firmware engineer online ...... READY',
  ];

  if (reduce || !boot || !log) {
    if (boot) boot.classList.add('done');
    return;
  }

  let i = 0;
  function next() {
    if (i < lines.length) {
      log.textContent += lines[i] + '\n';
      i++;
      setTimeout(next, 280);
    } else {
      setTimeout(() => boot.classList.add('done'), 450);
    }
  }
  next();
})();

// ---- Scroll reveal ----
(function () {
  const els = document.querySelectorAll('.section, .hero');
  els.forEach((el) => el.classList.add('reveal'));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
})();

// ---- Year ----
document.getElementById('year').textContent = new Date().getFullYear();
