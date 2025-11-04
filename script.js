const inputNamaGuest = document.querySelector('#guest-name');
const inputDeskripsiGuest = document.querySelector('#guest-info');
const inputTahunGuest = document.querySelector('#guest-tahun');

const previewJudul = document.querySelector('#Preview-Guest-Star h2');
const previewDeskripsi1 = document.querySelectorAll('#Preview-Guest-Star p')[0];
const previewTahun1 = document.querySelectorAll('#Preview-Guest-Star p')[1];
const previewGambar = document.querySelector('#Preview-Guest-Star img');
const previewCaption = document.querySelector('#Preview-Guest-Star figcaption');

inputNamaGuest.addEventListener('input', function() {
  const nama = inputNamaGuest.value.trim();

  if (nama === "") {
    previewJudul.textContent = "PRATINJAU ABOUT GUEST STAR";
    previewCaption.textContent = "Silahkan pilih guest star";
    previewGambar.src = "Serendwin.jpg";
  } else {
    previewJudul.textContent = `About ${nama}`;
    previewCaption.textContent = `Profil dari ${nama}`;

    if (nama.toLowerCase().includes("7verse")) {
      previewGambar.src = "7Verse.jpg";
    } else if (nama.toLowerCase().includes("daydream")) {
      previewGambar.src = "Daydream Girls.jpg";
    } else if (nama.toLowerCase().includes("universe")) {
      previewGambar.src = "Universe.jpg";
    } else {
      previewGambar.src = "Serendwin.jpg";
    }
  }
});

inputDeskripsiGuest.addEventListener('input', function() {
  const deskripsi = inputDeskripsiGuest.value.trim();

  if (deskripsi === "") {
    previewDeskripsi1.textContent = "Deskripsi tentang guest star.......";
  } else {
    previewDeskripsi1.textContent = deskripsi;
  }
});

inputTahunGuest.addEventListener('input', function() {
  const tahun = inputTahunGuest.value.trim();

  if (tahun === "") {
    previewTahun1.textContent = "Years join idol.......";
  } else {
    previewTahun1.textContent = tahun;
  }
});
