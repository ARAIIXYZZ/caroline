// Ripple effect on buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    let x = e.clientX - this.getBoundingClientRect().left;
    let y = e.clientY - this.getBoundingClientRect().top;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Floating hearts background
const heartsContainer = document.querySelector('.hearts');
function createHeart() {
  const heart = document.createElement('span');
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}
setInterval(createHeart, 400);

// Theme toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.innerHTML = document.body.classList.contains('dark') 
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
