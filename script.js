document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow img');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[n].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik
}); 

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPos = window.scrollY;

    // Ambang batas untuk memicu perubahan
    var threshold = 50;

    if (scrollPos > threshold) {
        // Mengubah gaya header saat digulir
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Cegah pengiriman formulir agar tidak langsung dilakukan
    event.preventDefault();
  
    // Arahkan ke halaman Profile.html setelah 1 detik
    setTimeout(function() {
      window.location.href = 'Profile.html';
    }, 1000); // Delay selama 1 detik
  });
  
