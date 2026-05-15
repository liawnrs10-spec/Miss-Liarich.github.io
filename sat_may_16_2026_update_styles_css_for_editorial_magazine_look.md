/* --- Bagian Utama Latar Belakang --- */
body {
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', serif; /* Font judul dari desain editorial */
    background-color: #000; /* Warna cadangan jika gambar gagal dimuat */
    color: #fff; /* Pastikan teks tetap putih */
    overflow-x: hidden; /* Mencegah scroll horizontal */
}

.hero-section {
    position: relative; /* Penting untuk lapisan overlay */
    width: 100%;
    min-height: 100vh; /* Memenuhi tinggi layar penuh */
    
    /* SEKSI INI UNTUK GAMBAR LATAR BELAKANG ANDA */
    /* Ganti 'nama-file-gambar-anda.jpg' dengan nama file gambar yang Anda upload */
    background-image: url('background github .jpeg'); 
    
    /* Membuat gambar menutupi seluruh area dengan halus */
    background-size: cover; 
    background-position: center; /* Memusatkan gambar */
    background-repeat: no-repeat;
    background-attachment: fixed; /* Membuat gambar latar belakang tidak ikut scroll (opsional, memberikan efek premium) */

    /* Tata letak konten agar berada di tengah */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* --- SEKSI PENTING: LAPISAN OVERLAY GELAP --- */
/* Kode ini menciptakan lapisan gelap tipis di atas gambar agar teks bisa dibaca */
.hero-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Hitam dengan transparansi 50% */
    z-index: 1; /* Di bawah konten teks */
}

/* --- Menyesuaikan Konten Teks --- */
/* Pastikan teks berada di atas lapisan overlay */
.hero-section .container {
    position: relative;
    z-index: 2; /* Di atas lapisan overlay */
}

/* Gaya teks yang Anda miliki (seperti di image_5.png) */
.hero-section h1 {
    font-size: 3rem; /* Judul besar */
    margin-bottom: 0.5rem;
}

.hero-section h2 {
    font-size: 1.2rem;
    font-weight: 300; /* Lebih tipis untuk subjudul */
    opacity: 0.8; /* Sedikit lebih redup agar lebih elegan */
}
/* ... (kode CSS Anda yang lain untuk tombol, ikon, dll) ... */
