
// Mengambil elemen tombol
const backToTopButton = document.getElementById("backToTop");

// Fungsi untuk menangani scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) { // Tampilkan tombol jika scroll lebih dari 200px
        backToTopButton.style.display = "flex";
    } else { // Sembunyikan tombol jika tidak
        backToTopButton.style.display = "none";
    }
});

// Fungsi untuk kembali ke atas
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Efek smooth scroll
    });
});
