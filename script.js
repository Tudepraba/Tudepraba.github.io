document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Kamu bisa tambahkan logika JavaScript lainnya di sini
// Contoh: animasi saat scroll, validasi form, dll.
