const progress = document.querySelector('.progress span');
const filters = [...document.querySelectorAll('.filter')];
const items = [...document.querySelectorAll('.timeline-item')];

function updateProgress(){
  const max = document.documentElement.scrollHeight - innerHeight;
  const pct = max > 0 ? (scrollY / max) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
}
addEventListener('scroll', updateProgress, {passive:true});
addEventListener('resize', updateProgress);
updateProgress();

filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const filter = btn.dataset.filter;
  items.forEach(item => {
    const cats = item.dataset.category.split(/\s+/);
    item.classList.toggle('is-hidden', filter !== 'all' && !cats.includes(filter));
  });
}));

const revealTargets = document.querySelectorAll('.tile,.photo-card,.sky-tile,.snapshot-card,.timeline-item,.mega-stat,.small-stat,.future-card,.qr-tile,.prelude');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:.07, rootMargin:'0px 0px -20px 0px'});
  revealTargets.forEach(el => observer.observe(el));
}
