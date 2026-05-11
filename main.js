document.addEventListener('DOMContentLoaded', function () {

  // Mark all cards and hero as reveal targets
  document.querySelectorAll('.card').forEach(function (el) {
    el.classList.add('reveal');
  });

  var heroEl = document.getElementById('hero');

  if (heroEl) {
    heroEl.classList.add('reveal');
  }

  // Scroll reveal observer
  var scrollObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        setTimeout(function () {

          entry.target.classList.add('visible');

        }, 80);

        scrollObserver.unobserve(entry.target);

      }

    });

  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {

    scrollObserver.observe(el);

  });

  // Custom cursor
  var dot = document.getElementById('cursor-dot');

  document.addEventListener('mousemove', function (e) {

    dot.style.left = e.clientX + 'px';

    dot.style.top = e.clientY + 'px';

  });

});
