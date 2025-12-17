const dotsContainer = document.querySelector('.floating-dots');
const dotCount = 30; // number of floating dots

for(let i=0; i<dotCount; i++){
    const dot = document.createElement('span');
    
    // Random starting position and animation duration
    const x = Math.random() * 100; // horizontal %
    const y = Math.random() * 100; // vertical %
    const duration = 10 + Math.random() * 15; // 10-25 seconds
    
    dot.style.left = x + 'vw';
    dot.style.top = y + 'vh';
    dot.style.setProperty('--x', `${Math.random()*30 - 15}vw`); // horizontal drift
    dot.style.animationDuration = duration + 's';
    
    dotsContainer.appendChild(dot);
}
//test