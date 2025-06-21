/* ───── MOBILE MENU ───── */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));

/* Close nav when link clicked (mobile) */
document.querySelectorAll('.nav a').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('open'))
);

/* ───── DARK MODE ───── */
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // swap icon
  darkToggle.innerHTML = document.body.classList.contains('dark')
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-regular fa-moon"></i>';
});

/* ───── FILTER PROJECTS ───── */
const filters = document.querySelectorAll('.filter');
const cards   = document.querySelectorAll('.card');

filters.forEach(btn =>
  btn.addEventListener('click', () => {
    // visual state
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const val = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display =
        val === 'all' || card.dataset.category === val ? 'block' : 'none';
    });
  })
);

/* ───── CONTACT FORM FEEDBACK (Formspree) ───── */
const form    = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
    .then(res => {
      form.reset();
      formMsg.textContent = 'Thanks! We’ll be in touch.';
    })
    .catch(() => { formMsg.textContent = 'Oops – please try again.'; });
});
