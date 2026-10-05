// validasi
// Selektor
const form = document.querySelector("#formDaftar");
const inputNama = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputHp = document.querySelector("#hp");
const inputSesi = document.querySelector("#sesi");

// Tampilkan pesan error + beri border merah
function tampilError(input, idError, pesan) {
  document.querySelector(idError).textContent = pesan;
  input.classList.add("input-error");
}

// Hapus semua error (dipanggil tiap submit)
function hapusSemuaError() {
  const semuaError = document.querySelectorAll(".pesan-error");
  for (let i = 0; i < semuaError.length; i++) {
    semuaError[i].textContent = "";
  }
  inputNama.classList.remove("input-error");
  inputEmail.classList.remove("input-error");
  inputHp.classList.remove("input-error");
  inputSesi.classList.remove("input-error");
}

// Event: saat form disubmit
form.addEventListener("submit", function (event) {
  event.preventDefault(); // cegah halaman reload
  hapusSemuaError();

  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const hp = inputHp.value.trim();
  const sesi = inputSesi.value;

  let valid = true;

  // Validasi nama
  if (nama === "") {
    tampilError(inputNama, "#errorNama", "Nama wajib diisi.");
    valid = false;
  } else if (nama.length < 3) {
    tampilError(inputNama, "#errorNama", "Nama minimal 3 huruf.");
    valid = false;
  }

  // Validasi email
  if (email === "") {
    tampilError(inputEmail, "#errorEmail", "Email wajib diisi.");
    valid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    tampilError(inputEmail, "#errorEmail", "Format email tidak valid. Contoh: budi@email.com");
    valid = false;
  }

  // Validasi no HP
  if (hp === "") {
    tampilError(inputHp, "#errorHp", "No HP wajib diisi.");
    valid = false;
  } else if (isNaN(hp)) {
    tampilError(inputHp, "#errorHp", "No HP hanya boleh berisi angka.");
    valid = false;
  } else if (hp.length < 10 || hp.length > 13) {
    tampilError(inputHp, "#errorHp", "No HP harus 10 sampai 13 digit.");
    valid = false;
  }

  // Validasi sesi
  if (sesi === "") {
    tampilError(inputSesi, "#errorSesi", "Silakan pilih salah satu sesi.");
    valid = false;
  }

  // Kalau semua benar -> panggil fungsi buatan Listy (kartu.js)
  if (valid === true) {
    tampilkanKartu(nama, email, hp, sesi);
  }
});
