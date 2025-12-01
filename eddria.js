    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Tutup menu saat link diklik (untuk mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    // POP UP gambar besar
    // ===== Efek pop-up gambar untuk Sekolah dan Sertifikat =====
    const images = document.querySelectorAll('#pendidikan img, #prestasi img'); // gambar di dua section
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close');

    images.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src; // ambil gambar yang diklik
      });
    });

    closeModal.onclick = () => {
      modal.style.display = 'none';
    };

    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = 'none';
    };