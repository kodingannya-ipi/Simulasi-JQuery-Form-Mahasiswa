// Dipanggil oleh validasi.js kalau semua data sudah valid.
// Variabel "form" berasal dari validasi.js (otomatis bisa dipakai).
function tampilkanKartu(nama, email, hp, sesi) {
  const kartu = document.querySelector("#kartu");

  kartu.innerHTML =
    "<h2>✅ Pendaftaran Berhasil!</h2>" +
    "<p><b>Nama:</b> " + nama + "</p>" +
    "<p><b>Email:</b> " + email + "</p>" +
    "<p><b>No HP:</b> " + hp + "</p>" +
    "<p><b>Sesi:</b> " + sesi + "</p>" +
    "<p class='catatan'>Simpan kartu ini sebagai bukti pendaftaran.</p>";

  // diguniakan untuk menampilkan kartu
  kartu.classList.add("tampil");
  // diguniakan untuk menghilangkan form
  form.reset(); 
  // geser layar ke kartu                 
  kartu.scrollIntoView();        
}