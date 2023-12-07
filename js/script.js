document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.clientHeight;
      const isVisible = window.scrollY > top - height * 0.5 && window.scrollY < top + height * 0.5;
      if (isVisible) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  });
});

// POPUP 

const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');

  function openPopup() {
    overlay.style.display = 'flex';
  }

  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.style.display = 'none';
    }
  });

 