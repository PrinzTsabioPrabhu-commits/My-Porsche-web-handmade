 

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



window.addEventListener('load', function() {
    // 1. Dapatkan elemen loader dan konten
    const loaderWrapper = document.getElementById('loader-wrapper');
    const mainContent = document.getElementById('main-content');

    // 2. Tunda penghilangan selama 2 detik (misalnya)
    setTimeout(function() {
        // Sembunyikan loader
        loaderWrapper.style.display = 'none';
        
        // Tampilkan konten utama
        mainContent.style.display = 'block'; 
        
    }, 2000); // Durasi tunda dalam milidetik (2000ms = 2 detik)
});


window.addEventListener('load', function() {
    // Dapatkan elemen loader dan konten
    const loaderWrapper = document.getElementById('loader-wrapper');
    const mainContent = document.getElementById('main-content');

    // Sembunyikan loader segera setelah semua aset selesai dimuat
    loaderWrapper.style.display = 'none';
    
    // Tampilkan konten utama
    mainContent.style.display = 'block'; 
    
    // Opsional: Jika Anda ingin efek transisi lebih halus,
    // Anda bisa menggunakan class CSS dan properti opacity/transition.
});