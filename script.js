// ===== LOGIN FUNCTION =====
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if (email === "admin@gmail.com" && pass === "12345") {
      alert("Login berhasil!");
      window.location.href = "dashboard.html";
    } else {
      alert("Email atau password yang anda masukkan salah!");
    }
  });

  // Modal Box
  const modal = document.getElementById("modalBox");
  const modalBody = document.getElementById("modalBody");
  const closeBtn = document.querySelector(".close");

  document.getElementById("forgotBtn").onclick = () => {
    modal.style.display = "block";
    modalBody.innerHTML = "<h3>Lupa Password</h3><p>Hubungi admin untuk reset password.</p>";
  };

  document.getElementById("registerBtn").onclick = () => {
    modal.style.display = "block";
    modalBody.innerHTML = "<h3>Form Pendaftaran</h3><input placeholder='Email'><input placeholder='Password'><button>Daftar</button>";
  };

  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
}

document.getElementById("registerBtn").onclick = () => {
    modal.style.display = "block";
    modalBody.innerHTML = "<h3>Form Pendaftaran</h3><input placeholder='Email'><input placeholder='Password'><button>Daftar</button>";
  };

  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; 
};


// ===== GREETING (Dashboard) =====
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  let text = "Selamat datang!";
  if (hour < 12) text = "Selamat pagi!";
  else if (hour < 18) text = "Selamat siang!";
  else text = "Selamat sore!";
  greeting.textContent = text;
}

// ===== STOK BUKU =====
const tabelBuku = document.querySelector("#tabelBuku tbody");
if (tabelBuku && typeof dataKatalogBuku !== "undefined") {
  const renderTable = () => {
    tabelBuku.innerHTML = "";
    dataKatalogBuku.forEach((b) => {
      const row = <tr><td>${b.judul}</td><td>${b.penulis}</td><td>${b.harga}</td><td>${b.stok}</td></tr>;
      tabelBuku.innerHTML += row;
    });
  };
  renderTable();

const formTambah = document.getElementById("formTambah");
  formTambah.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = {
      judul: document.getElementById("judul").value,
      penulis: document.getElementById("penulis").value,
      harga: document.getElementById("harga").value,
      stok: document.getElementById("stok").value,
    };
    dataKatalogBuku.push(newBook);
    renderTable();
    formTambah.reset();
    alert("Buku berhasil ditambahkan!");
  });
}

// ===== PEMESANAN =====
const formPemesanan = document.getElementById("formPemesanan");
if (formPemesanan) {
  formPemesanan.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("namaPemesan").value;
    const buku = document.getElementById("bukuDipesan").value;
    const jumlah = document.getElementById("jumlah").value;
    const bayar = document.getElementById("metodeBayar").value;

    document.getElementById("hasilPemesanan").innerHTML = `
      <h3>Detail Pemesanan</h3>
      <p>Nama: ${nama}</p>
      <p>Buku: ${buku}</p>
      <p>Jumlah: ${jumlah}</p>
      <p>Metode Bayar: ${bayar}</p>
    `;
  });
}

// ===== TRACKING =====
const trackingForm = document.getElementById("trackingForm");
if (trackingForm) {
  trackingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const noOrder = document.getElementById("noOrder").value.trim();
    const hasil = document.getElementById("hasilTracking");
    const found = dataTracking.find(d => d.noOrder === noOrder);

    if (found) {
      hasil.innerHTML = `
        <h3>Nomor DO: ${found.noOrder}</h3>
        <p>Nama Pemesan: <strong>${found.nama}</strong></p>
        <p>Status: ${found.status}</p>
        <p>Ekspedisi: ${found.ekspedisi}</p>
        <p>Tanggal Kirim: ${found.tanggal}</p>
        <p>Total Pembayaran: Rp${found.total.toLocaleString()}</p>
      `;
    } else {
      hasil.innerHTML = <p style="color:red;">Nomor order tidak ditemukan!</p>;
    }
  });
}