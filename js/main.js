// Highlight active nav link
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) {
      a.classList.add('active');
    }
    // Open external links in new tab
    if (a.host !== location.host) a.setAttribute('target','_blank');
  });
})();

