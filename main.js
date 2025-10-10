 

 document.addEventListener('DOMContentLoaded', function() {
    const tombol = document.getElementById('tombolAksi');
    const durasiAnimasi = 400;  
    function picuAnimasi() {
         
        tombol.classList.add('active');

         
        setTimeout(() => {
             l
            tombol.classList.remove('');
        }, durasiAnimasi); 
        
        console.log("Animasi dipicu oleh event 'click'.");
    }

    tombol.addEventListener('click', picuAnimasi);
});

 document.addEventListener('DOMContentLoaded', function() {
    const tombol = document.getElementById('tombolAksi');
    const durasiAnimasi = 400; // Durasi animasi di CSS adalah 0.4s (400ms)

    /**
     * Fungsi untuk menambahkan kelas 'active' dan kemudian menghapusnya
     * untuk membuat efek 'tekan dan lepas' otomatis.
     */
    function picuAnimasi() {
        // 1. Tambahkan kelas 'active' untuk memicu animasi CSS
        tombol.classList.add('active');

        // 2. Atur jeda waktu (sesuai durasi transisi) sebelum menghapus kelas
        setTimeout(() => {
            // Hapus kelas 'active' agar tombol kembali ke keadaan normal
            tombol.classList.remove('active');
        }, durasiAnimasi); 
        
        console.log("Animasi dipicu oleh event 'click'.");
    }

    // Menambahkan Event Listener: Ketika tombol diklik, panggil fungsi picuAnimasi
    tombol.addEventListener('click', picuAnimasi);
});



document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.getElementById("puzzle-loader").classList.add("fade-out");
        setTimeout(() => {
          document.getElementById("puzzle-loader").style.display = "none";
          document.body.style.overflow = "auto";
        }, 1000);
      }, 6000);
    });